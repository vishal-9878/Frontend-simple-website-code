import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css'; // Ensure correct path

const App = () => {
  return (
    <div className={styles.container}>
      <h2>Welcome to my AWS Project</h2>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/fireworks" className={styles.link}>FIRE</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
