import type { User, UserWithMetadata } from '../interfaces/User';

type CreateUserFn = (userData: Omit<User, 'id'>) => User;

const addMetadata = (user: User): UserWithMetadata => ({
  ...user,
  role: 'user',
  createdAt: Date.now(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function WithUserMetadata(): (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _target: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => PropertyDescriptor {
  return (_target, _propertyKey, descriptor) => {
    const originalMethod = descriptor.value as CreateUserFn;

    descriptor.value = function (userData: Omit<User, 'id'>): User {
      const user = originalMethod.call(this, userData);
      return addMetadata(user);
    };

    return descriptor;
  };
}
