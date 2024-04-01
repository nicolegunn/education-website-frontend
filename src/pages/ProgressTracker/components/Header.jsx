import React from 'react';
import {Link} from "react-router-dom";
import Button from '../../../common/Button';

function Header() {
  return (
    <header style={header}>
      <nav>
        <Link to="/help-requests">
        <button style={btn}>Help center</button>
        </Link>
        <Link to="/project-library">
        <button style={btn}>More projects</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;

const header = {
    backgroundColor: 'white',
    padding: '5px',
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    textAlign: 'center',
}

const btn = {
  margin: '5px',
}


