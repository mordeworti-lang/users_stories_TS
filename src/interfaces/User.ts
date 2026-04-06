export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role?: string;
  createdAt?: number;
}

export interface UserWithMetadata extends User {
  role: string;
  createdAt: number;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  user?: User;
  message: string;
}
