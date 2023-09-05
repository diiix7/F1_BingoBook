import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoF1 from '../../assets/images/F1logo.png';

const SignUp = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('SignIn');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Pour la version web
  //const host = 'http://127.0.0.1:3000/api/user/signin';

  //Pour la version mobile iOS / Android
  const host = 'http://192.168.0.162:3000/api/user/signup';
  
  const handleSignUp = async () => {
    try {
      if (!name || !email || !password){
        Alert.alert('Something went wrong', 'Fill the fields correctly !');  
      }
      else{
        const response = await fetch(host, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
          Alert.alert('Account created successfully', 'Now connect to your account');
          navigation.navigate('SignIn');
        } else {
          const errorData = await response.json();
          //console.error('Error while registering:', errorData);
          Alert.alert('Connection error', 'Incorrect credentials', 'Try again');
        }
      }
    } catch (error) {
      //console.error('Error while registering:', error);
      Alert.alert('Connection error', 'Incorrect credentials', 'Try again');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={LogoF1} style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.signIn} onPress={handleSignUp}>
        <Text style={styles.signIn}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomOption} onPress={handleContinue}>
        <Text>Already have an account ? <Text style={styles.register}>SignIn</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 300,
      },
      title: {
        fontSize: 32,
        marginBottom: 60,
        fontWeight: 'bold',
      },
      logo: {
        width: 250,
        height: 150,
        borderRadius: 40,
        marginTop: 300,
      },
      input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        marginBottom: 30,
        borderRadius: 15,
        borderStyle: 'dashed',
      },
      signIn: {
        backgroundColor: 'red',
        color: '#fff',
        paddingHorizontal: 14,
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 18,
        borderRadius: 15,
      },
      bottomOption: {
        marginTop: 150,
      },
      register: {
        fontWeight: 'bold',
      },
  });
  
  export default SignUp;