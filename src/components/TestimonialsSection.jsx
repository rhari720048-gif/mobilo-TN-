import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      avatar: '/karthik_avatar.jpg',
      quote: '"I found a genuine mobile shop in my area through MOBILO TN. Very helpful and easy to use!"',
      author: '- Karthik, Chennai',
      rating: 5
    },
    {
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      quote: '"I reported a scammer and within a few days it was verified. Great initiative for our safety!"',
      author: '- Priya, Coimbatore',
      rating: 5
    },
    {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      quote: '"This platform really helps us find trusted shops. I recommend it to everyone."',
      author: '- Suresh, Madurai',
      rating: 5
    }
  ];

  return (
    <section 
      id="testimonials"
      style={{
        padding: '3.5rem 0',
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 850,
            color: '#0F172A',
            letterSpacing: '-0.03em',
            marginBottom: '0.4rem',
            lineHeight: 1.2
          }}>
            Trusted by People Across <span style={{ color: '#2563EB' }}>Tamil Nadu</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748B', fontWeight: 500, margin: 0 }}>
            Real users. Real stories. A safer shopping experience.
          </p>
        </div>

        {/* 3 Cards Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}>
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="testimonial-card"
            >
              <div style={{ display: 'flex', itemsCenter: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <img 
                  src={t.avatar} 
                  alt={t.author}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #BFDBFE'
                  }}
                />
                <div style={{ fontSize: '0.9rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.45, flex: 1 }}>
                  {t.quote}
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0F172A', marginBottom: '0.35rem' }}>
                  {t.author}
                </div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.08) !important;
          border-color: #93C5FD !important;
        }
      `}</style>
    </section>
  );
}
