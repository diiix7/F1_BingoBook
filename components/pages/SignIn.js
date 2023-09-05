import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoF1 from '../../assets/images/F1logo.png';

const SignIn = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('SignUp');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Pour la version web
  //const host = 'http://127.0.0.1:3000/api/user/signin';

  //Pour la version mobile iOS / Android
  const host = 'http://192.168.0.162:3000/api/user/signin';

  const handleSignIn = async () => {
    try {
      if (!email || !password){
        Alert.alert('Something went wrong', 'Fill the fields correctly !');  
      }
      else {
        const response = await fetch(host, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const { token } = await response.json();
          Alert.alert('Connected successfully');
          navigation.navigate('HomePage');
        }else {
          const errorData = await response.json();
          //console.error('Connection error:', errorData);
          Alert.alert('Connection error', 'Create an account first or check your credentials');
        }
      }
    } catch (error) {
      //console.error('Connection error:', error);
      Alert.alert('Connection error', 'Create an account first or check your credentials');
    }
  };


  return (
    <View style={styles.container}>
      <Image source={LogoF1} style={styles.logo} />
      <Text style={styles.title}>Sign In</Text>
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
      <TouchableOpacity style={styles.signIn} onPress={handleSignIn}>
        <Text style={styles.signIn}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomOption} onPress={handleContinue}>
        <Text>No account ? <Text style={styles.register}>Register</Text></Text>
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
    marginTop: 320,
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
    marginTop: 200,
  },
  register: {
    fontWeight: 'bold',
  },
});

export default SignIn;