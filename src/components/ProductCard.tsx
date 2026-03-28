import React from 'react';
import { Product } from '../interfaces/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '16px', 
      margin: '8px',
      maxWidth: '300px'
    }}>
      <div style={{ 
        width: '100%', 
        height: '200px', 
        overflow: 'hidden',
        borderRadius: '4px',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={product.imageUrl} 
          alt={product.name}
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/300x200/cccccc/666666?text=No+Image';
            e.currentTarget.style.objectFit = 'cover';
          }}
        />
      </div>
      <h3 style={{ margin: '8px 0', color: '#333' }}>{product.name}</h3>
      <p style={{ margin: '4px 0', color: '#666' }}>
        <strong>Marca:</strong> {product.brand}
      </p>
      <p style={{ margin: '4px 0', color: '#666' }}>
        <strong>Categoría:</strong> {product.category}
      </p>
      <p style={{ margin: '4px 0', fontSize: '1.2em', fontWeight: 'bold', color: '#2c3e50' }}>
        ${product.price.toLocaleString()}
      </p>
      <p style={{ margin: '4px 0', color: '#27ae60' }}>
        <strong>Stock:</strong> {product.quantity} unidades
      </p>
      <p style={{ 
        margin: '4px 0', 
        padding: '2px 8px', 
        borderRadius: '12px', 
        fontSize: '0.8em',
        backgroundColor: product.isActive === 'active' ? '#d4edda' : '#f8d7da',
        color: product.isActive === 'active' ? '#155724' : '#721c24'
      }}>
        {product.isActive === 'active' ? '✅ Activo' : '❌ Inactivo'}
      </p>
      {product.tags && (
        <div style={{ margin: '8px 0' }}>
          {product.tags.map((tag, index) => (
            <span 
              key={index}
              style={{ 
                backgroundColor: '#e9ecef', 
                padding: '2px 6px', 
                borderRadius: '8px', 
                margin: '2px',
                fontSize: '0.75em'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
