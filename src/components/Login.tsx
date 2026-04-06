import { useState, type FormEvent, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../utils/auth';
import { setAuthUser } from '../utils/session';
import type { Credentials } from '../interfaces/User';

const INITIAL_CREDENTIALS: Credentials = {
  email: '',
  password: '',
};

export const Login = (): ReactElement => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<Credentials>(INITIAL_CREDENTIALS);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials((prev: Credentials) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setMessage('');

    const result = authenticate(credentials);

    if (result.success && result.user) {
      setIsError(false);
      setMessage(result.message);
      setAuthUser(result.user);
      setTimeout(() => navigate('/dashboard'), 1000);
    } else {
      setIsError(true);
      setMessage(result.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      {message && (
        <p className={`message ${isError ? 'error' : 'success'}`}>
          {message}
        </p>
      )}
    </div>
  );
};
