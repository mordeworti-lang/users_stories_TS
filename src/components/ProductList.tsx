import React from 'react';
import { products, users } from '../data/data';
import ProductCard from './ProductCard';
import UserCard from './UserCard';

const ProductList: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
        🛍️ Lista de Productos
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px',
        marginBottom: '40px'
      }}>
        {products.map((product) => (
          <ProductCard key={String(product.sku)} product={product} />
        ))}
      </div>

      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
        👥 Lista de Usuarios
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '20px'
      }}>
        {users.map((user) => (
          <UserCard key={String(user.id)} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
