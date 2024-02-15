import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username.trim() === '' || password.trim() === '') {
        Alert.alert('Error', 'Debe llenar todos los datos');
      } else { 
      navigation.replace('SecondNav');
      }
    };
  
    return (
       
      <View style={styles.fondo}>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Iniciar Sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            onChangeText={setUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            onChangeText={setPassword} 
            value={password} 
            secureTextEntry
          />
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  fondo: {
    width: '100%',
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedor: {
    width: '80%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
    padding: 20,
    borderRadius:20
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: '100%', 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    borderColor:'gray'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    width: '100%',
    marginTop: 60,
    borderRadius:10
  },
  buttonText: {
    color: 'white',
  },
});
