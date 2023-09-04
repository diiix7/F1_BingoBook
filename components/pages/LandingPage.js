import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoF1 from '../../assets/images/F1logo.png';
import LogoBas from '../../assets/images/threes.jpg';

const LandingPage = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.welcomeText}></Text>
        <Text style={styles.header}>Formula 1 BingoBook</Text>
        <Image source={LogoF1} style={styles.logo} />
        <TouchableOpacity style={styles.continue} onPress={handleContinue}>
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
        <Image source={LogoBas} style={styles.logobas} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200 ,
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 5,
    marginTop: 250,
  },
  header: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  continue: {
    backgroundColor: 'red',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 15,
  },
  logo: {
    width: 250,
    height: 150,
    borderRadius: 40,
    marginBottom: 20,
  },
  logobas: {
    width: '140%',
    height: 300,
    marginTop: 120,
    borderRadius: 80,
  },
});

export default LandingPage;
