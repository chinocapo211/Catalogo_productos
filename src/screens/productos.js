import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import { allProducts } from '../api/productsApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [Products, setProducts] = useState([]);

  const traerProductos = async () => {
    try {
      const result = await allProducts();
      if (result.status === 200) {
        console.log("Productos obtenidos con éxito");
        setProducts(result.data.products); // Guardar los productos aleatorios en el estado
      } else {
        console.log("Error al obtener productos, status:", result.status);
      }
    } catch (error) {
      console.error("Error al obtener productos:", error.message);
    }
  };

  useEffect(() => {
    traerProductos(); // Llamar a la función para obtener productos al montar el componente
  }, []);


  const filteredProducts = Products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <Navbar />
      <h2 style={styles.title}>Productos</h2>
      
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar productos..."
        style={styles.searchInput}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div style={styles.productList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.images[0]} alt={item.title} style={styles.productImage} />
              <p style={styles.productName}>{item.title}</p>
            </Link>
        </div>
          ))
        ) : (
          <p style={styles.noResults}>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    padding: 16,
    background: "#f6f8fa",
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: "4%",
    borderRadius:15,
  },
  
  title: {
    textAlign: 'center',
    margin: '20px 0',
  },

  searchInput: {
    display: 'block',
    margin: '20px auto',
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
    minHeight: '200px', // Establecer altura mínima
  },
  
  productCard: {
    width: "31%",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center",
    padding: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  
  productImage: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 4,
  },
  
  productName: {
    marginBottom: 10,
    fontSize: 20,
  },

  noResults: {
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    fontSize: 18,
    color: '#888',
  },
  navItem:{
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 20,
    fontWeight: 550,
  }, 
};

export default Home;
