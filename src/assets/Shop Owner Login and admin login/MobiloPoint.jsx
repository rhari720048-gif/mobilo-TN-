// MobiloPoint.jsx - login form-ஐ point பண்ணும் character (smooth arm + hand animation)
// Files (same folder): MobiloPoint.jsx, character-point.webp
import { useEffect, useRef, useState } from "react";
import character from "./character-point.webp";

/* Mobilo point: ஒரே படம் + மென்மையான mesh வளைவு (WebGL). வெட்டிய துண்டுகள் இல்லை. */
const IW = 860, IH = 849, PADL = 90, PADT = 30;   // படம் + கை வெளியே போனாலும் வெட்டாமல் இருக்க extra இடம்
const ELBOW = [310, 640], WRIST = [205, 505];      // pivot points (image pixels)
const CUT = [[270,0],[270,430],[360,470],[360,660],[370,720]];   // கை-உடல் இணையும் கோடு
const D = [-0.77, -0.64];                          // மணிக்கட்டிலிருந்து விரல் நுனி திசை
const NECK = [525, 335];                           // தலை pivot
const PERIOD = 2.6;                                // seconds (ஒரு point-point சுற்று)
const KA = [[0,0],[.07,-2],[.15,4.5],[.24,-.5],[.32,4.5],[.42,0],[1,0]];   // forearm degrees (elbow)
const KH = [[0,0],[.07,-4],[.15,8],[.24,-1],[.32,7],[.42,0],[1,0]];       // hand degrees (wrist)
const KD = [[0,0],[.15,-2.2],[.32,-2.6],[.5,.8],[.75,.5],[1,0]];          // head degrees (neck)

const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function xcut(y) {
  if (y <= CUT[0][1]) return CUT[0][0];
  for (let i = 0; i < CUT.length - 1; i++) if (y <= CUT[i + 1][1]) {
    const t = (y - CUT[i][1]) / (CUT[i + 1][1] - CUT[i][1]); return CUT[i][0] + t * (CUT[i + 1][0] - CUT[i][0]);
  }
  return CUT[CUT.length - 1][0];
}
function weights(x, y) {
  const xc = xcut(y), k = Math.min(1, Math.max(0, (y - 430) / 40));
  const wa = 1 - sstep(xc - 25 - 25 * k, xc + 15 + 15 * k, x);
  const s = (x - WRIST[0]) * D[0] + (y - WRIST[1]) * D[1];
  return [wa, sstep(-10, 40, s) * wa, 1 - sstep(300, 365, y), 1 - sstep(450, 800, y)];
}
function angle(K, p) {
  for (let i = 0; i < K.length - 1; i++) if (p <= K[i + 1][0]) {
    const t = (p - K[i][0]) / (K[i + 1][0] - K[i][0]); return K[i][1] + (K[i + 1][1] - K[i][1]) * t * t * (3 - 2 * t);
  }
  return 0;
}
const VS = `
attribute vec2 a_pos; attribute vec4 a_w;
uniform vec2 u_res, u_off, u_elbow, u_wrist, u_neck; uniform float u_aa, u_ah, u_ad, u_b;
varying vec2 v_uv;
vec2 rot(vec2 p, vec2 c, float a){ float s=sin(a), co=cos(a); vec2 d=p-c; return c+vec2(co*d.x-s*d.y, s*d.x+co*d.y); }
void main(){
  vec2 p = rot(a_pos, u_wrist, u_ah * a_w.y);
  p = rot(p, u_elbow, u_aa * a_w.x);
  p = rot(p, u_neck, u_ad * a_w.z);
  p.y -= u_b * a_w.w;
  v_uv = a_pos / vec2(${IW}.0, ${IH}.0);
  vec2 q = (p + u_off) / u_res;
  gl_Position = vec4(q.x * 2.0 - 1.0, 1.0 - q.y * 2.0, 0.0, 1.0);
}`;
const FS = `precision mediump float;
uniform sampler2D u_tex; uniform float u_fade, u_blink; uniform vec3 u_skin; varying vec2 v_uv;
vec4 lid(vec4 c, vec2 px, vec2 e, vec2 r, float a){            // கண் இமை (blink)
  vec2 d = px - e; float s = sin(a), co = cos(a);
  d = vec2(co * d.x + s * d.y, -s * d.x + co * d.y) / r;
  float m = 1.0 - smoothstep(0.62, 1.0, length(d));
  float ly = u_blink * 2.2 - 1.1, shut = smoothstep(0.7, 0.92, u_blink);
  float sweep = (1.0 - smoothstep(ly - 0.08, ly + 0.08, d.y)) * step(0.02, u_blink);
  float cover = max(sweep, shut) * m;
  float lash = 0.45 - 0.4 * d.x * d.x;                          // மூடிய இமை வளைவு
  float line = exp(-pow((d.y - ly) / 0.14, 2.0)) * (1.0 - shut) * step(0.04, u_blink) * 0.85
             + exp(-pow((d.y - lash) / 0.09, 2.0)) * shut * 0.9;
  c.rgb = mix(c.rgb, u_skin, cover);
  c.rgb = mix(c.rgb, vec3(0.18, 0.10, 0.08), line * m);
  return c;
}
void main(){
  vec2 px = v_uv * vec2(${IW}.0, ${IH}.0);
  vec4 c = texture2D(u_tex, v_uv);
  c = lid(c, px, vec2(472.0, 207.0), vec2(27.0, 17.0), -0.15);
  c = lid(c, px, vec2(552.0, 183.0), vec2(27.0, 20.0), -0.35);
  gl_FragColor = c * u_fade;
}`;

function startMobiloPoint(canvas, src, { reduced = false } = {}) {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true });
  if (!gl) return null;
  const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(pr); gl.useProgram(pr);
  const S = 8, cols = Math.ceil(IW / S) + 1, rows = Math.ceil(IH / S) + 1;
  const pos = new Float32Array(cols * rows * 6), idx = new Uint16Array((cols - 1) * (rows - 1) * 6);
  let n = 0;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const x = Math.min(IW, i * S), y = Math.min(IH, j * S); pos.set([x, y, ...weights(x, y)], n); n += 6;
  }
  let m = 0;
  for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
    const a = j * cols + i, b = a + 1, c = a + cols, d = c + 1; idx.set([a, b, c, b, d, c], m); m += 6;
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
  const ap = gl.getAttribLocation(pr, "a_pos"), aw = gl.getAttribLocation(pr, "a_w");
  gl.enableVertexAttribArray(ap); gl.vertexAttribPointer(ap, 2, gl.FLOAT, false, 24, 0);
  gl.enableVertexAttribArray(aw); gl.vertexAttribPointer(aw, 4, gl.FLOAT, false, 24, 8);
  const U = (k) => gl.getUniformLocation(pr, k);
  gl.uniform2f(U("u_res"), IW + PADL, IH + PADT); gl.uniform2f(U("u_off"), PADL, PADT);
  gl.uniform2f(U("u_elbow"), ELBOW[0], ELBOW[1]); gl.uniform2f(U("u_wrist"), WRIST[0], WRIST[1]); gl.uniform2f(U("u_neck"), NECK[0], NECK[1]); gl.uniform3f(U("u_skin"), 0.947,0.624,0.454);
  const fit = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2), r = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(r.width * dpr)); canvas.height = Math.max(1, Math.round(r.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  fit(); const ro = new ResizeObserver(fit); ro.observe(canvas);
  let raf = 0, dead = false, t0 = 0, last = 0, nb = 2.4, bs = -9, mx = 0;
  const on = !reduced;
  const A = { x: on ? -16 : 0, v: 0, k: 110, c: 12 }, Hd = { x: on ? -25 : 0, v: 0, k: 170, c: 10 }, Nk = { x: 0, v: 0, k: 45, c: 8 };
  const spring = (s, tg, dt) => { for (let i = 0; i < 2; i++) { const h = dt / 2; s.v += (s.k * (tg - s.x) - s.c * s.v) * h; s.x += s.v * h; } };
  const onMove = (e) => { mx = (e.clientX / innerWidth - 0.5) * 2; };   // mouse-ஐப் பார்த்துத் தலை லேசாகத் திரும்பும்
  addEventListener("pointermove", onMove);
  const draw = (t) => {
    if (!t0) t0 = t;
    const T = (t - t0) / 1000, dt = Math.min(0.033, T - last), rad = Math.PI / 180; last = T;
    const p = (Math.max(0, T - 0.9) % PERIOD) / PERIOD;                  // intro முடிந்த பின் point-point
    spring(A, on ? angle(KA, p) : 0, dt); spring(Hd, on ? angle(KH, p) : 0, dt);   // spring: இயற்கையான overshoot & lag
    spring(Nk, on ? angle(KD, p) + Math.sin(T * 0.9) * 0.7 + mx * 1.6 : 0, dt);
    if (T > nb) { bs = T; nb = T + 2.4 + Math.random() * 3; }            // random கண் சிமிட்டல்
    const bt = (T - bs) / 0.18, blink = on && bt >= 0 && bt <= 1 ? Math.sin(Math.PI * bt) : 0;
    gl.uniform1f(U("u_aa"), A.x * rad); gl.uniform1f(U("u_ah"), Hd.x * rad); gl.uniform1f(U("u_ad"), Nk.x * rad);
    gl.uniform1f(U("u_b"), on ? Math.sin(T * 1.6) * 2.5 : 0);            // மூச்சு
    gl.uniform1f(U("u_blink"), blink);
    gl.uniform1f(U("u_fade"), on ? Math.min(1, T / 0.5) : 1);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0);
    if (!dead && on) raf = requestAnimationFrame(draw);
  };
  const img = new Image();
  img.onload = () => {
    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
    raf = requestAnimationFrame(draw);
  };
  img.src = src;
  return () => { dead = true; cancelAnimationFrame(raf); ro.disconnect(); removeEventListener("pointermove", onMove); };
}

const css = `
.mp{position:relative;aspect-ratio:${IW}/${IH}}
.mp:before{content:"";position:absolute;inset:-6% -10% 10% 18%;background:radial-gradient(closest-side,rgba(255,255,255,.24),rgba(255,255,255,0));filter:blur(8px)}
.mp-tilt{position:absolute;inset:0;transform-origin:50% 100%;animation:mp-sway 3.4s ease-in-out infinite}
.mp canvas,.mp img{position:absolute;pointer-events:none;user-select:none}
.mp canvas{left:${-PADL / IW * 100}%;top:${-PADT / IH * 100}%;width:${(IW + PADL) / IW * 100}%;height:${(IH + PADT) / IH * 100}%}
.mp img{inset:0;width:100%;height:100%}
@keyframes mp-sway{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-5px) rotate(.5deg)}}
@media (prefers-reduced-motion:reduce){.mp-tilt{animation:none}}
`;

export default function MobiloPoint({ width = 420 }) {
  const ref = useRef(null);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stop = startMobiloPoint(ref.current, character, { reduced });
    if (!stop) setFallback(true);
    return () => stop && stop();
  }, []);
  return (
    <div style={{ width }}>
      <style>{css}</style>
      <div className="mp">
        <div className="mp-tilt">
          {fallback ? <img src={character} alt="Mobilo assistant" /> : <canvas ref={ref} role="img" aria-label="Mobilo assistant pointing at the login form" />}
        </div>
      </div>
    </div>
  );
}
