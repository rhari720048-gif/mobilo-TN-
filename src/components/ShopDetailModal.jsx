import React from 'react';
import { X, ShieldCheck, MapPin, Phone, MessageSquare, Star, Clock, CheckCircle2, UserCheck, Calendar, ExternalLink } from 'lucide-react';

export default function ShopDetailModal({ shop, onClose }) {
  if (!shop) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            padding: '0.4rem',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-subtle)',
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Verification Status Banner */}
        <div style={{
          backgroundColor: 'var(--success-bg)',
          border: '1px solid var(--success-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.85rem'
        }}>
          <div style={{
            backgroundColor: 'var(--success)',
            color: '#FFFFFF',
            borderRadius: '50%',
            padding: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '0.1rem'
          }}>
            <ShieldCheck size={22} />
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#065F46' }}>
              PHYSICALLY VERIFIED BY DISTRICT ADMIN
            </div>
            <div style={{ fontSize: '0.825rem', color: '#047857', marginTop: '0.15rem' }}>
              Verified by: <strong>{shop.verifiedBy}</strong> on <strong>{shop.verifiedDate}</strong> (ID: {shop.districtAdminCode})
            </div>
          </div>
        </div>

        {/* Header Info */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <img 
            src={shop.image} 
            alt={shop.name}
            style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem' }}>
              <MapPin size={15} />
              <span>{shop.district} District • {shop.town}</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
              {shop.name}
            </h2>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <UserCheck size={16} />
              <span>Owner: <strong>{shop.ownerName}</strong></span>
            </div>
          </div>
        </div>

        {/* Detailed Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          
          {/* Address & Timings */}
          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Address & Hours</h4>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.75rem' }}>{shop.address}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <Clock size={16} color="var(--primary)" />
              <span>Timings: <strong>{shop.timing}</strong></span>
            </div>
          </div>

          {/* Contact & Map */}
          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Direct Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href={`tel:${shop.phone}`} className="btn btn-primary btn-sm" style={{ justifyContent: 'flex-start' }}>
                <Phone size={16} />
                <span>Call Shop ({shop.phone})</span>
              </a>
              <a href={`https://wa.me/${shop.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ justifyContent: 'flex-start', color: '#16A34A', borderColor: '#BBF7D0' }}>
                <MessageSquare size={16} color="#16A34A" />
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>

        </div>

        {/* Brands & Services Offered */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Supported Brands & Services</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {shop.brands.map(b => (
              <span key={b} style={{ padding: '0.3rem 0.75rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700 }}>
                {b}
              </span>
            ))}
            {shop.services.map(s => (
              <span key={s} style={{ padding: '0.3rem 0.75rem', backgroundColor: 'var(--bg-subtle)', color: 'var(--text-main)', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>
                ✓ {s}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Guarantee */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            * This listing is verified under MOBILO TN Physical Inspection Standards.
          </div>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
