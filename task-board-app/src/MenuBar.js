// MenuBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/notes">Task Board</Link>
        </li>
        <li>
          <Link to="/weather">Weather Forecast</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
