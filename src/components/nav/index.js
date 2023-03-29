import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ImageOne from './images/close.png'

function GetNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className={`navbar-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <li><span className="navbar-icon"></span></li>
        <li><span className="navbar-icon"></span></li>
        <li><span className="navbar-icon"></span></li>
      </div>
      <div className={`res-navbar ${menuOpen ? 'open' : ''}`}>
        <img className="close" src={ImageOne} onClick={() => setMenuOpen(!menuOpen)}></img>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/3d-art">3D Art</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default GetNav;