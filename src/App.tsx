import React from 'react';
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
          <section className="hero-section">
            <h2 className="hero-title">Bienvenido a nuestra tienda</h2>
            <p className="hero-description">
              Descubre nuestra exclusiva colección de productos de alta calidad
            </p>
          </section>
          
          <section className="features-section">
            <div className="features-grid">
              <div className="feature-card">
                <h3 className="feature-title">Productos Premium</h3>
                <p className="feature-description">
                  Selección curada de los mejores artículos
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Envío Rápido</h3>
                <p className="feature-description">
                  Entrega garantizada en tiempo récord
                </p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Soporte 24/7</h3>
                <p className="feature-description">
                  Atención personalizada cuando la necesites
                </p>
              </div>
            </div>
          </section>
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
