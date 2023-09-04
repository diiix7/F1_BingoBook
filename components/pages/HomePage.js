import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Menu from '../../assets/images/menu-icon.png';
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('HomePage');
  };

  const handleArticles = () => {
    navigation.navigate('ArticlesPage');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Image source={Menu} style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Accueil</Text>
      </View>

      <View style={styles.content}>
        <Text>Contenu de la page d'accueil</Text>
      </View>

      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleArticles}>
            <Text style={styles.menuItem}>Articles</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.menuItem}>Drivers</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.menuItem}>Cars</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.menuItem}>Teams</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.menuItem}>FIA</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.menuItem}>Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleHome}>
            <Text style={styles.menuItem}>About</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'red',
  },
  menuButton: {
    position: 'absolute',
    left: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    top: 80,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
  },
});

export default HomePage;
 