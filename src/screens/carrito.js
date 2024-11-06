import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import { allProducts } from '../api/productsApi';

const Carrito = () => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);
    const [productos, setProductos] = useState([]);
  
    const quitarDelCarrito = (id) => {
        setProductosEnCarrito(productosEnCarrito.filter(producto => producto.id !== id));
        let productIds = JSON.parse(localStorage.getItem('productIds')) || [];
        productIds = productIds.filter(productId => Number(productId) !== id);
        localStorage.setItem('productIds', JSON.stringify(productIds));
    };
    

    const traerProductos = async () => {
        try {
            const result = await allProducts();
            if (result.status === 200) {
                console.log("Productos obtenidos con éxito");
                const productos = result.data.products;
                setProductos(productos);
                console.log(productos);
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
  
    useEffect(() => {
        const productIds = JSON.parse(localStorage.getItem('productIds')) || [];
        console.log(productIds)
        let listaCarro = [];
        
        productIds.forEach(id => {
            const producto = productos[id-1]
            console.log(producto)
            if (producto) {
                listaCarro.push(producto);
            }
        });
    
        setProductosEnCarrito(listaCarro);
    }, [productos]);
    

    return (
        <div style={styles.container}>
            <Navbar />
            <h2 style={styles.title}>Carrito de Compras</h2>
            <div style={styles.productList}>
                {productosEnCarrito.length === 0 ? (
                    <p style={styles.emptyMessage}>Tu carrito está vacío.</p>
                ) : (
                    productosEnCarrito.map(producto => (
                        <div key={producto.id} style={styles.productCard}>
                            <div style={styles.productInfo}>
                                <p style={styles.productName}>{producto.title}</p>
                                <p style={styles.productPrice}>${producto.price}</p>
                            </div>
                            <button 
                                style={styles.button} 
                                onClick={() => quitarDelCarrito(producto.id)}
                            >
                                Quitar
                            </button>
                        </div>
                    ))
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
        borderRadius: 15,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    
    title: {
        textAlign: 'center',
        margin: '20px 0',
        color: '#333',
    },

    productList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 16,
    },

    emptyMessage: {
        color: '#666',
        fontSize: '18px',
    },

    productCard: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        padding: 16,
        margin: '10px 0',
        backgroundColor: '#fff',
        borderRadius: 8,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    
    productInfo: {
        display: 'flex',
        flexDirection: 'column',
    },

    productName: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },

    productPrice: {
        fontSize: '16px',
        color: '#666',
    },

    button: {
        padding: '10px 15px',
        borderRadius: '5px',
        border: 'none',
        background: '#FF6F61',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background 0.3s',
    },

    buttonHover: {
        background: '#FF4C3B',
    },
};

export default Carrito;
