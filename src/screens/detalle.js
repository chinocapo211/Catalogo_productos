import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, Platform, KeyboardAvoidingView, Alert } from 'react';
const Detalle = ({ navigation }) => {
  return (
    <div styles={styles.all}>
      <h1>Detalle</h1>
    </div>
  );
};

const styles = {
  all: {
    flex: 1,
    backgroundColor: '#f6f8fa', // Fondo gris claro similar al de GitHub
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
};

export default Detalle;