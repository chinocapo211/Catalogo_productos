import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 

const products = [
  { id: '1', name: 'Producto 1', image: 'https://via.placeholder.com/150?text=Imagen1' },
  { id: '2', name: 'Producto 2', image: 'https://via.placeholder.com/150?text=Imagen2' },
  { id: '3', name: 'Producto 3', image: 'https://via.placeholder.com/150?text=Imagen3' },
  { id: '4', name: 'Producto 4', image: 'https://via.placeholder.com/150?text=Imagen4' },
  { id: '5', name: 'Producto 5', image: 'https://via.placeholder.com/150?text=Imagen5' },
  { id: '6', name: 'Producto 6', image: 'https://via.placeholder.com/150?text=Imagen6' },
];

const carouselItems = [
  { id: '1', image: 'https://via.placeholder.com/300?text=Carousel1' },
  { id: '2', image: 'https://via.placeholder.com/300?text=Carousel2' },
  { id: '3', image: 'https://via.placeholder.com/300?text=Carousel3' },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={styles.container}>
      <Navbar/>
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id} style={styles.carouselSlide}>
            <img src={item.image} alt={`Carousel ${item.id}`} style={styles.carouselImage} />
          </div>
        ))}
      </Slider>
      <h2 style={styles.title}>Productos</h2>
      <div style={styles.productList}>
        {products.map(item => (
          <div key={item.id} style={styles.productCard}>
            <img src={item.image} alt={item.name} style={styles.productImage} />
            <p style={styles.productName}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
    background: "#f6f8fa",
    maxWidth: 1200,
    margin: '0 auto',
  },
  
  carouselSlide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  carouselImage: {
    width: "100%",
    height: "auto",
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
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 4,
  },
  
  productName: {
    marginBottom: 10,
  },
};

export default Home;
