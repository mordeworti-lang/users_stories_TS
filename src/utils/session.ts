import type { User } from '../interfaces/User';

const STORAGE_KEY = 'auth_user';

export const setAuthUser = (user: User): void =>
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));

export const getAuthUser = (): User | null => {
  const data = sessionStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as User) : null;
};

export const clearAuthUser = (): void =>
  sessionStorage.removeItem(STORAGE_KEY);

export const isAuthenticated = (): boolean =>
  getAuthUser() !== null;
