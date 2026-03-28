import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">E-Commerce Lite</h1>
          <p className="app-subtitle">Tienda Online Premium</p>
        </div>
      </header>
      
      <main className="app-main">
        <div className="container">
          <ProductList />
        </div>
      </main>
      
      <footer className="app-footer">
        <div className="container">
          <p className="footer-text">
            © 2024 E-Commerce Lite. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
