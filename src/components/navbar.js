// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Link style={styles.navItem} to="/">Home</Link>
      <Link style={styles.navItem} to="/productos">Products</Link>
      <Link style={styles.navItem} to="/contacto">Contact</Link>
      <div style={styles.underline} />
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Gris más claro
    padding: '10px 0',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    fontFamily: 'Roboto, sans-serif', // Fuente moderna
  },
  navItem: {
    color: '#000', // Texto en negro
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '550', // Peso de fuente más grueso
    padding: '5px 10px', // Espacio alrededor del texto
  },
  underline: {
    width: '100%',
    height: '2px',
    backgroundColor: 'red', // Línea roja
    position: 'absolute',
    bottom: 0,
  },
};

export default Navbar;
