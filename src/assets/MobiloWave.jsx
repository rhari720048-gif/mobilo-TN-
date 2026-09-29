// MobiloWave.jsx - ஒரே படம் + மென்மையான வளைவு (கை & மணிக்கட்டு), வெட்டிய துண்டுகள் இல்லை
// Files (same folder): MobiloWave.jsx, character.webp
import { useEffect, useRef, useState } from "react";
import character from "./character.webp";

/* ---- Mobilo wave: one image + smooth mesh bending (WebGL), no cut pieces ---- */
const IW = 902, IH = 941, PADL = 100, PADT = 40;   // image size + free space so the hand never clips
const ELBOW = [150, 700], WRIST = [123, 470];      // pivot points (image pixels)
const CUT = [[225,0],[225,250],[266,290],[266,440],[255,470],[232,540],[210,600],[212,700],[225,770]];

const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function xcut(y) {
  if (y <= CUT[0][1]) return CUT[0][0];
  for (let i = 0; i < CUT.length - 1; i++) {
    if (y <= CUT[i + 1][1]) { const t = (y - CUT[i][1]) / (CUT[i + 1][1] - CUT[i][1]); return CUT[i][0] + t * (CUT[i + 1][0] - CUT[i][0]); }
  }
  return CUT[CUT.length - 1][0];
}
// how much a point follows the arm (elbow) and the hand (wrist): 0..1, smooth
function weights(x, y) {
  const xc = xcut(y), k = Math.min(1, Math.max(0, (y - 440) / 80));
  const wa = (1 - sstep(xc - 25 * k, xc + 10 + 20 * k, x)) * (1 - sstep(740, 790, y));
  const wh = (1 - sstep(430, 520, y)) * (1 - sstep(xc, xc + 10, x));
  return [wa, wh];
}

const KA = [[0,0],[.10,-5],[.22,4],[.34,-5],[.46,3],[.55,0],[1,0]];      // arm degrees
const KH = [[0,0],[.10,-10],[.22,9],[.34,-10],[.46,6],[.55,0],[1,0]];    // hand degrees
function angle(K, p) {
  for (let i = 0; i < K.length - 1; i++) if (p <= K[i + 1][0]) {
    const t = (p - K[i][0]) / (K[i + 1][0] - K[i][0]);
    return K[i][1] + (K[i + 1][1] - K[i][1]) * t * t * (3 - 2 * t);
  }
  return 0;
}

const VS = `
attribute vec2 a_pos; attribute vec2 a_w;
uniform vec2 u_res, u_off, u_elbow, u_wrist; uniform float u_aa, u_ah;
varying vec2 v_uv;
vec2 rot(vec2 p, vec2 c, float a){ float s=sin(a), co=cos(a); vec2 d=p-c; return c+vec2(co*d.x-s*d.y, s*d.x+co*d.y); }
void main(){
  vec2 p = rot(a_pos, u_wrist, u_ah * a_w.y);
  p = rot(p, u_elbow, u_aa * a_w.x);
  v_uv = a_pos / vec2(${IW}.0, ${IH}.0);
  vec2 q = (p + u_off) / u_res;
  gl_Position = vec4(q.x * 2.0 - 1.0, 1.0 - q.y * 2.0, 0.0, 1.0);
}`;
const FS = `precision mediump float; uniform sampler2D u_tex; varying vec2 v_uv;
void main(){ gl_FragColor = texture2D(u_tex, v_uv); }`;

function startMobiloWave(canvas, src, { reduced = false } = {}) {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true });
  if (!gl) return null;
  const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(pr); gl.useProgram(pr);

  // mesh: 8px grid over the image
  const S = 8, cols = Math.ceil(IW / S) + 1, rows = Math.ceil(IH / S) + 1;
  const pos = new Float32Array(cols * rows * 4), idx = new Uint16Array((cols - 1) * (rows - 1) * 6);
  let n = 0;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const x = Math.min(IW, i * S), y = Math.min(IH, j * S), [wa, wh] = weights(x, y);
    pos.set([x, y, wa, wh], n); n += 4;
  }
  let m = 0;
  for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
    const a = j * cols + i, b = a + 1, c = a + cols, d = c + 1;
    idx.set([a, b, c, b, d, c], m); m += 6;
  }
  const vb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, vb); gl.bufferData(gl.ARRAY_BUFFER, pos, gl.STATIC_DRAW);
  const ib = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
  const ap = gl.getAttribLocation(pr, "a_pos"), aw = gl.getAttribLocation(pr, "a_w");
  gl.enableVertexAttribArray(ap); gl.vertexAttribPointer(ap, 2, gl.FLOAT, false, 16, 0);
  gl.enableVertexAttribArray(aw); gl.vertexAttribPointer(aw, 2, gl.FLOAT, false, 16, 8);
  const U = (k) => gl.getUniformLocation(pr, k);
  gl.uniform2f(U("u_res"), IW + PADL, IH + PADT); gl.uniform2f(U("u_off"), PADL, PADT);
  gl.uniform2f(U("u_elbow"), ELBOW[0], ELBOW[1]); gl.uniform2f(U("u_wrist"), WRIST[0], WRIST[1]);

  const fit = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2), r = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(r.width * dpr)); canvas.height = Math.max(1, Math.round(r.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  fit(); const ro = new ResizeObserver(fit); ro.observe(canvas);

  let raf = 0, dead = false;
  const draw = (t) => {
    const p = (t / 1000 % 1.3) / 1.3, rad = Math.PI / 180;
    gl.uniform1f(U("u_aa"), reduced ? 0 : angle(KA, p) * rad);
    gl.uniform1f(U("u_ah"), reduced ? 0 : angle(KH, p) * rad);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0);
    if (!dead && !reduced) raf = requestAnimationFrame(draw);
  };
  const img = new Image();
  img.onload = () => {
    const tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    raf = requestAnimationFrame(draw);
  };
  img.src = src;
  return () => { dead = true; cancelAnimationFrame(raf); ro.disconnect(); };
}

const css = `
.mw{position:relative;aspect-ratio:${IW}/${IH}}
.mw-tilt{position:absolute;inset:0;transform-origin:50% 100%;animation:mw-sway 3.2s ease-in-out infinite}
.mw canvas,.mw img{position:absolute;pointer-events:none;user-select:none}
.mw canvas{left:${-PADL / IW * 100}%;top:${-PADT / IH * 100}%;width:${(IW + PADL) / IW * 100}%;height:${(IH + PADT) / IH * 100}%}
.mw img{inset:0;width:100%;height:100%}
@keyframes mw-sway{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-6px) rotate(.6deg)}}
@media (prefers-reduced-motion:reduce){.mw-tilt{animation:none}}
`;

export default function MobiloWave({ width = 300 }) {
  const ref = useRef(null);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stop = startMobiloWave(ref.current, character, { reduced });
    if (!stop) setFallback(true);
    return () => stop && stop();
  }, []);
  return (
    <div style={{ width }}>
      <style>{css}</style>
      <div className="mw">
        <div className="mw-tilt">
          {fallback ? <img src={character} alt="Mobilo assistant" /> : <canvas ref={ref} role="img" aria-label="Mobilo assistant waving" />}
        </div>
      </div>
    </div>
  );
}
