import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, Platform, KeyboardAvoidingView, Alert } from 'react';
const Contacto = ({ navigation }) => {
  return (
    <View styles={styles.all}>

    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#f6f8fa', // Fondo gris claro similar al de GitHub
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default Contacto;