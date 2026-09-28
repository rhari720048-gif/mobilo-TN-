import React from 'react';
import { ShieldCheck, MapPin, Star, Phone, ArrowUpRight } from 'lucide-react';

export default function ShopCard({ shop, onSelectShop }) {
  return (
    <div 
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
      className="shop-card-wrapper"
    >
      
      {/* Image Container */}
      <div style={{ position: 'relative', height: '175px', backgroundColor: '#F1F5F9', overflow: 'hidden' }}>
        <img 
          src={shop.image} 
          alt={shop.name}
          className="shop-card-image"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
        />
        
        {/* Verification Pill */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#FFFFFF',
          padding: '0.25rem 0.65rem',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          fontSize: '0.725rem',
          fontWeight: 700,
          color: 'var(--success)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
        }}>
          <ShieldCheck size={14} color="var(--success)" />
          <span>Physical Verified</span>
        </div>

        {/* Open Status Pill */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: shop.isOpen ? '#DCFCE7' : '#FEE2E2',
          color: shop.isOpen ? '#15803D' : '#991B1B',
          padding: '0.2rem 0.55rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.7rem',
          fontWeight: 700
        }}>
          {shop.isOpen ? '🟢 Open Now' : '🔴 Closed'}
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.15rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        
        {/* District & Location */}
        <div style={{ fontSize: '0.775rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <MapPin size={13} />
          <span>{shop.district} • {shop.town}</span>
        </div>

        {/* Shop Name */}
        <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.4rem', lineHeight: 1.3, fontWeight: 700 }}>
          {shop.name}
        </h3>

        {/* Google Rating Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.825rem', marginBottom: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', backgroundColor: '#FEF3C7', color: '#B45309', padding: '0.15rem 0.45rem', borderRadius: '4px', fontWeight: 700 }}>
            <Star size={13} fill="#B45309" color="#B45309" />
            <span>{shop.googleRating}</span>
          </div>
          <span style={{ color: 'var(--text-muted)' }}>({shop.reviewCount} Reviews)</span>
        </div>

        {/* Address */}
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {shop.address}
        </p>

        {/* Footer Action */}
        <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.5rem' }}>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => onSelectShop(shop)}
            style={{ flex: 1 }}
          >
            <span>View Details</span>
            <ArrowUpRight size={14} />
          </button>
          
          <a 
            href={`tel:${shop.phone}`}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.45rem 0.65rem' }}
            title="Call Shop"
          >
            <Phone size={14} color="var(--primary)" />
          </a>
        </div>

      </div>

      <style>{`
        .shop-card-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: #CBD5E1;
        }
        .shop-card-wrapper:hover .shop-card-image {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
