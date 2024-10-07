import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/navbar'; 
import foto1 from '../img/1.jpg';
import foto2 from '../img/MedioAficheClasesHogar7.jpg';
import foto3 from '../img/ofertas coto fin de semana.jpg';
import producto1 from '../img/producto1.jpg';
import producto2 from '../img/producto2.jpg';
import producto3 from '../img/producto3.jpg';
import producto4 from '../img/producto4.jpg';
import producto5 from '../img/producto5.jpg';
import producto6 from '../img/producto6.jpg';
import producto7 from '../img/dulce.jpg';
import producto8 from '../img/calcio.jpg';
import producto9 from '../img/choco.jpg';

const products = [
  { id: '1', name: 'Leche extra proteina', image: producto1 },
  { id: '2', name: 'Leche larga vida', image: producto2 },
  { id: '3', name: 'Leche liviana', image: producto3 },
  { id: '4', name: 'Leche extra prebioticos', image: producto4 },
  { id: '5', name: 'Leche barista', image: producto5 },
  { id: '6', name: 'Leche menos calorias', image: producto6 },
  { id: '7', name: 'Dulce de leche', image: producto7 },
  { id: '8', name: 'Leche extra calcio', image: producto8 },
  { id: '9', name: 'Leche chocolatada', image: producto9 },
];

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

  const randomProducts = getRandomProducts(products, 6);

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
      <h2 style={styles.title}>Productos</h2>
      <div style={styles.productList}>
        {randomProducts.map(item => (
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
};

export default Home;
