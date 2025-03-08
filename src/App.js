import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageMain from './pages/pageMain';
import Page1 from './pages/PageEx1';
import Page2 from './pages/PageEx2';
import Page3 from './pages/PageEx3';
import Page4 from './pages/PageEx4';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: '20px' }}>
         <Link style={{ marginRight: '10px' }} to="/">Página Principal</Link>
          <Link style={{ marginRight: '10px' }} to="/page1">Página 1</Link>
          <Link style={{ marginRight: '10px' }} to="/page2">Página 2</Link>
          <Link style={{ marginRight: '10px' }} to="/page3">Página 3</Link>
          <Link style={{ marginRight: '10px' }} to="/page4">Página 4</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
