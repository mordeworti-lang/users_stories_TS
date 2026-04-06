import type { Credentials, AuthResult, User } from '../interfaces/User';
import { mockUsers } from '../data/users';

const findUserByEmail = (email: string): User | undefined =>
  mockUsers.find((user) => user.email === email);

const validatePassword = (user: User, password: string): boolean =>
  user.password === password;

export const authenticate = (credentials: Credentials): AuthResult => {
  const user = findUserByEmail(credentials.email);

  if (!user) {
    return { success: false, message: 'Usuario no encontrado' };
  }

  if (!validatePassword(user, credentials.password)) {
    return { success: false, message: 'Contraseña incorrecta' };
  }

  const { password: _, ...userWithoutPassword } = user;
  return {
    success: true,
    user: userWithoutPassword,
    message: 'Autenticación exitosa',
  };
};
