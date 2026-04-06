import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Dashboard } from './pages/Dashboard';
import { isAuthenticated } from './utils/session';

const PrivateRoute = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/" />;
};

export const App = (): React.ReactElement => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
