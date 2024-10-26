import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import { detailProduct } from '../api/productsApi';

const Detalle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({}); // Cambia a objeto vacío

  const traerProductos = async () => {
    try {
      const result = await detailProduct(id);
      console.log(result);
      if (result.status === 200) {
        console.log("Product retrieved successfully");
        setProduct(result.data); 
      } else {
        console.log("Error retrieving product, status:", result.status);
      }
    } catch (error) {
      console.error("Total error:", error.message);
    }
  };

  useEffect(() => {
    traerProductos(); // Call function to fetch products on component mount
  }, []);

  // Function to determine the color of the rating based on its value
  const getRatingColor = (rating) => {
    if (rating > 4) return '#4a4'; // Dark green
    if (rating >= 3) return '#ffcc00'; // Soft yellow
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
          
          {/* Show rating only if it exists */}
          {product.rating && (
            <p style={{ ...styles.rating, color: getRatingColor(product.rating) }}>
              Rating: {product.rating}
            </p>
          )}

          {/* Show additional info only if they exist */}
          {product.stock && <p style={styles.stock}>Stock: {product.stock}</p>}
          {product.brand && <p style={styles.brand}>Brand: {product.brand}</p>}
          {product.category && <p style={styles.category}>Category: {product.category}</p>}
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
    fontSize: '28px', // Decrease font size for rating
    margin: '5px 0', // Add margin for spacing
  },

  additionalInfo: {
    fontSize: '18px',
    color: '#555',
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
};

export default Detalle;
