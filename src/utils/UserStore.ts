import type { User } from '../interfaces/User';
import { mockUsers } from '../data/users';
import { WithUserMetadata } from './decorators';

const generateId = (): string =>
  Math.random().toString(36).substring(2, 15);

const logHttp = (method: string, endpoint: string, data?: unknown): void =>
  console.log(`[HTTP ${method}] ${endpoint}`, data ?? '');

export class UserStore {
  private users: User[] = [...mockUsers];

  list(): User[] {
    logHttp('GET', '/api/users');
    return [...this.users];
  }

  findByName(name: string): User | undefined {
    logHttp('GET', `/api/users?name=${name}`);
    return this.users.find((u) => u.name === name);
  }

  @WithUserMetadata()
  create(userData: Omit<User, 'id'>): User {
    logHttp('POST', '/api/users', userData);
    const newUser: User = { ...userData, id: generateId() };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, data: Partial<User>): User | null {
    logHttp('PATCH', `/api/users/${id}`, data);
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    this.users[index] = { ...this.users[index], ...data };
    return this.users[index];
  }

  remove(id: string): boolean {
    logHttp('DELETE', `/api/users/${id}`);
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
}

export const userStore = new UserStore();
