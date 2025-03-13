import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageMain from './pages/pageMain';
import Page1 from './pages/PageEx1';
import Page2 from './pages/PageEx2';
import Page3 from './pages/PageEx3';
import Page4 from './pages/PageEx4';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div>  
        <nav>
          <ul>
            <li><Link to="/page4">Página 4</Link></li>
          </ul>       
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
