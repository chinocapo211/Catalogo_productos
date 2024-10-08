import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, Platform, KeyboardAvoidingView, Alert } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
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

const Detalle = () => {
  const { id } = useParams();
  const product = products[id - 1];

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.title}>Detalle del producto</h1>
      <div style={styles.content}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div style={styles.numberContainer}>
          <p style={styles.productName}>{product.name}</p>
          <p style={styles.number}>${id * 100}</p>
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
    alignItems: 'flex-start', // Cambiado para alinear desde la parte superior
    justifyContent: 'space-between',
  },

  image: {
    width: 450,
    height: 450,
    borderRadius: 10,
    marginLeft: '20px' // Espaciado a la derecha de la imagen
  },

  numberContainer: {
    textAlign: 'left',
    width: '50%', // Ajusta el ancho según sea necesario
    marginTop: '60px', // Espaciado hacia arriba para el número
  },

  title: {
    margin: '20px 0',
    textAlign: "center",
  },

  productName: {
    fontWeight: 'bold',
    fontSize: '30px',
  },

  number: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
};

export default Detalle;

