import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

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
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  const renderCarouselItem = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.carouselImage} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={renderCarouselItem}
        sliderWidth={300}
        itemWidth={300}
        loop={true}
      />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa',
    padding: 16,
  },
  productCard: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
  productName: {
    marginBottom: 10,
  },
  carouselImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default Home;
