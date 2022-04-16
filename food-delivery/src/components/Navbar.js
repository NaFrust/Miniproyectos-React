import React, {useState} from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import '../style/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
      };

  return (
      <div className="navbar">
          <div className="leftSide" id={openLinks ? "open" : "close"} >
              <img src={logo} alt="logo"/>
              <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/">Menu</Link>
                <Link to="/">Sobre nosotros</Link>
                <Link to="/">Contacto</Link>
             
              </div>

          </div>
          <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/">Menu</Link>
            <Link to="/">Sobre nosotros</Link>
            <Link to="/">Contacto</Link>
            <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
          </div>

      </div>

  )
}

export default Navbar