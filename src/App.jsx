import React, { lazy, Suspense } from 'react';
import './App.css';

const Header = lazy(() => import('./components/Header'));
const NavBar = lazy(() => import('./components/NavBar')); 
const Section = lazy(() => import('./components/Section'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div>
      <Suspense fallback={<div className="loading-text">Loading Header...</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div className="loading-text">Loading NavBar...</div>}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<div className="loading-text">Loading Section...</div>}>
        <Section />
      </Suspense>

      <Suspense fallback={<div className="loading-text">Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;