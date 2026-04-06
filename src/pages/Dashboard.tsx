import { useEffect, useState, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthUser, clearAuthUser } from '../utils/session';
import { userStore } from '../utils/UserStore';
import type { User, UserWithMetadata } from '../interfaces/User';

export const Dashboard = (): ReactElement => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [createdUser, setCreatedUser] = useState<UserWithMetadata | null>(null);

  useEffect(() => {
    const currentUser = getAuthUser();
    if (!currentUser) {
      navigate('/');
      return;
    }
    setUser(currentUser);
    loadUsers();
    testCreateUser();
  }, [navigate]);

  const loadUsers = (): void => {
    const allUsers = userStore.list();
    setUsers(allUsers);
  };

  const testCreateUser = (): void => {
    const newUser = userStore.create({
      name: 'Test User',
      email: 'test@example.com',
    });
    setCreatedUser(newUser as UserWithMetadata);
  };

  const handleLogout = (): void => {
    clearAuthUser();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </header>
      
      <section className="welcome">
        <h2>Bienvenido, {user?.name}</h2>
        <p>Email: {user?.email}</p>
      </section>

      <section className="users-list">
        <h3>Usuarios del Sistema ({users.length})</h3>
        <ul>
          {users.map((u: User) => (
            <li key={u.id}>{u.name} - {u.email}</li>
          ))}
        </ul>
      </section>

      <section className="decorator-demo">
        <h3>Usuario Creado con Decorador:</h3>
        {createdUser && (
          <div className="user-card">
            <p><strong>Nombre:</strong> {createdUser.name}</p>
            <p><strong>Email:</strong> {createdUser.email}</p>
            <p><strong>Rol:</strong> {createdUser.role}</p>
            <p><strong>Creado:</strong> {new Date(createdUser.createdAt).toLocaleString()}</p>
          </div>
        )}
      </section>
    </div>
  );
};
