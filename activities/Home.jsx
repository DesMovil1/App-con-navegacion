import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, TextInput} from 'react-native';
import styles from './Styles';

const Home = ({balance, setBalance}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');

  const DATOS_ACTIVOS = [
    {
      nombre: 'BTC',
      precio: '51,841.11$',
      cambio: '+0.36%',
    },
    {
      nombre: 'BNB',
      precio: '352.6$',
      cambio: '+6.33%',
    },
    {
      nombre: 'ETH',
      precio: '2,910.18$',
      cambio: '+2.46%',
    },
    {
      nombre: 'ADA',
      precio: '0.5989$',
      cambio: '+5.44%',
    },
    {
      nombre: 'XRP',
      precio: '0.759$',
      cambio: '+3.21%',
    },
    {
      nombre: 'DOT',
      precio: '18.22$',
      cambio: '-1.45%',
    },
    {
      nombre: 'SOL',
      precio: '127.94$',
      cambio: '+4.12%',
    },
  ];

  

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(currentBalance => currentBalance + amount);
    }
    setModalVisible(false);
    setDepositAmount('');
  };

  return (
    <View style={styles.vista}>
      <View style={styles.areaBalance}>
        <View style={styles.balanceColumn}>
          <Text style={styles.textStyle}>Balance total (USD)</Text>
          <Text style={styles.balance}>${balance.toFixed(2)}</Text>
        </View>
        <View style={styles.depositColumn}>
          <TouchableOpacity style={styles.btnDeposito} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Depósito</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Agregar fondos</Text>
            <TextInput
              style={styles.input}
              onChangeText={setDepositAmount}
              value={depositAmount}
              keyboardType="numeric"
              placeholder="Cantidad"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.btnModalDeposit} onPress={handleDeposit}>
              <Text style={styles.textStyle}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.tituloColunmas}>
        <Text style={styles.columnaTexto}>Nombre</Text>
        <Text style={styles.columnaTexto}>Último Precio</Text>
        <Text style={styles.columnaTexto}>% Cambio 24h</Text>
      </View>
      {DATOS_ACTIVOS.map((activo, index) => (
        <View key={index} style={styles.activos}>
          <Text style={styles.columnaTexto}>{activo.nombre}</Text>
          <Text style={styles.columnaTexto}>{activo.precio}</Text>
          <Text style={styles.btnPrecio}>{activo.cambio}</Text>
        </View>
      ))}
    </View>
  );
};



export default Home;
