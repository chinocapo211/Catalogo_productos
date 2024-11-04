import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import { detailProduct } from '../api/productsApi';

const Detalle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isHovered, setIsHovered] = useState(false); // Estado para hover

  const traerProductos = async () => {
    try {
      const result = await detailProduct(id);
      if (result.status === 200) {
        setProduct(result.data); 
      } else {
        console.log("Error retrieving product, status:", result.status);
      }
    } catch (error) {
      console.error("Total error:", error.message);
    }
  };

  useEffect(() => {
    traerProductos();
  }, []);

  const handleAddToCart = () => {
    const existingIds = JSON.parse(localStorage.getItem('productIds')) || [];
    
    if (!existingIds.includes(id)) {
      existingIds.push(id);
      localStorage.setItem('productIds', JSON.stringify(existingIds));
      alert(`Producto ${id} añadido al carro`);
    } else {
      alert(`El producto ${id} ya está en el carro`);
    }
  };

  const getRatingColor = (rating) => {
    if (rating > 4) return '#4a4'; 
    if (rating >= 3) return '#ffcc00'; 
    return 'red';
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.title}>Product Details</h1>
      <div style={styles.content}>
        <img src={product.thumbnail} alt={product.title} style={styles.image} />
        <div style={styles.numberContainer}>
          <p style={styles.productName}>{product.title}</p>
          <p style={styles.productDetail}>{product.description}</p>
          <p style={styles.number}>${product.price}</p>

          {product.rating && (
            <p style={{ ...styles.rating, color: getRatingColor(product.rating) }}>
              Rating: {product.rating}
            </p>
          )}

          {product.stock && <p style={styles.stock}>Stock: {product.stock}</p>}
          {product.brand && <p style={styles.brand}>Brand: {product.brand}</p>}
          {product.category && <p style={styles.category}>Category: {product.category}</p>}

          {/* Botón Añadir al carro con hover */}
          <button
            style={{
              ...styles.addButton,
              backgroundColor: isHovered ? '#218838' : '#28a745', // Color al pasar el mouse
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleAddToCart}
          >
            Añadir al carro
          </button>
        </div>
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
    borderRadius: 15,
  },
  
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  image: {
    width: 450,
    height: 450,
    borderRadius: 10,
    marginLeft: '20px',
  },

  numberContainer: {
    textAlign: 'left',
    width: '50%',
    marginTop: '60px',
  },

  title: {
    margin: '20px 0',
    textAlign: "center",
  },

  productName: {
    fontWeight: 'bold',
    fontSize: '30px',
  },
  
  productDetail: {
    fontSize: '20px',
  },

  number: {
    fontSize: '30px',
    fontWeight: 'bold',
  },

  rating: {
    fontSize: '28px',
    margin: '5px 0',
  },

  stock: {
    margin: '2px 0',
  },

  brand: {
    margin: '2px 0',
  },

  category: {
    margin: '2px 0',
  },

  addButton: {
    marginTop: '20px',
    padding: '10px 15px',
    fontSize: '18px',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Transición suave
  },
};

export default Detalle;
