import React from 'react';
import { User } from '../interfaces/types';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '16px', 
      margin: '8px',
      maxWidth: '350px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '8px 0', color: '#333', fontSize: '1.1em' }}>{user.fullName}</h3>
      <p style={{ margin: '4px 0', color: '#666', fontSize: '0.9em' }}>
        <strong>Email:</strong> {user.email}
      </p>
      <p style={{ margin: '4px 0', color: '#666', fontSize: '0.9em' }}>
        <strong>Dirección:</strong> {user.address}
      </p>
      <p style={{ margin: '4px 0', color: '#666', fontSize: '0.9em' }}>
        <strong>ID:</strong> {String(user.id)}
      </p>
      <p style={{ 
        margin: '4px 0', 
        padding: '2px 8px', 
        borderRadius: '12px', 
        fontSize: '0.8em',
        backgroundColor: user.isActive === 'active' ? '#d4edda' : '#f8d7da',
        color: user.isActive === 'active' ? '#155724' : '#721c24',
        display: 'inline-block'
      }}>
        {user.isActive === 'active' ? 'Activo' : 'Inactivo'}
      </p>
      <p style={{ 
        margin: '4px 0', 
        padding: '2px 8px', 
        borderRadius: '12px', 
        fontSize: '0.8em',
        backgroundColor: user.role === 'admin' ? '#fff3cd' : '#d1ecf1',
        color: user.role === 'admin' ? '#856404' : '#0c5460',
        display: 'inline-block'
      }}>
        {user.role === 'admin' ? 'Administrador' : 'Usuario'}
      </p>
      <p style={{ margin: '4px 0', color: '#999', fontSize: '0.8em' }}>
        <strong>Creado:</strong> {user.createdAt.toLocaleDateString()}
      </p>
    </div>
  );
};

export default UserCard;
