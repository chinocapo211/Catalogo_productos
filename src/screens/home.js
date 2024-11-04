import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import foto1 from '../img/1.jpg';
import foto2 from '../img/MedioAficheClasesHogar7.jpg';
import foto3 from '../img/ofertas coto fin de semana.jpg';
import { allProducts } from '../api/productsApi';
import { Link } from 'react-router-dom';

const carouselItems = [
  { id: '1', image: foto1 },
  { id: '2', image: foto2 },
  { id: '3', image: foto3 },
];

const getRandomProducts = (array, num) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('productIds')) {
      localStorage.setItem('productIds', JSON.stringify([])); // Crea un array vacío
    }
}, []);

  const traerProductos = async () => {
    try {
      const result = await allProducts();
      if (result.status === 200) {
        console.log("Productos obtenidos con éxito");
        const productos = result.data.products; // Obtener productos directamente de la respuesta
        const productosAleatorios = getRandomProducts(productos, 6); // Seleccionar productos aleatorios
        setRandomProducts(productosAleatorios); // Guardar los productos aleatorios en el estado
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

  return (
    <div style={styles.container}>
      <Navbar />
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id} style={styles.carouselSlide}>
            <img src={item.image} alt={`Carousel ${item.id}`} style={styles.carouselImage} />
          </div>
        ))}
      </Slider>
      <h2 style={styles.title}>Products</h2>
      <div style={styles.productList}>
        {randomProducts.map(item => (
          <div key={item.id} style={styles.productCard}>
            <Link style={styles.navItem} to={`/detalle/${item.id}`}>
              <img src={item.images[0]} alt={item.title} style={styles.productImage} />
              <p style={styles.productName}>{item.title}</p>
            </Link>
          </div>
        ))}
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
  
  carouselSlide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  carouselImage: {
    width: 1200,
    height: 600,
    borderRadius: 4,
  },
  
  title: {
    textAlign: 'center',
    margin: '20px 0',
  },
  
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
  },
  
  productCard: {
    width: "48%",
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

  navItem:{
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 20,
    fontWeight: 550,
  },
};

export default Home;
