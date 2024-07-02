import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Fireworks from './Fireworks';
import Models from './Models'
import './index.css';

const Index = () => {
  return (
    <Router>
      <div className="container1">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/fireworks" element={<Fireworks />} />
          <Route path="/hidden" element={<Models />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
