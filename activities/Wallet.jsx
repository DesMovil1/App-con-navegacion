import {useState} from 'react'
import { Text, View, TouchableOpacity, Modal, TextInput,ScrollView } from 'react-native'
import styles from './Styles';

const Wallet = ({balance, setBalance}) => { 
  const [modalVisible, setModalVisible] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  
  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(currentBalance => currentBalance + amount);
    }
    setModalVisible(false);
    setDepositAmount('');
  };

  
  const activosCripto = [
    { nombre: 'Bitcoin', cantidad: '0.5', precio: '51,841.11$' },
    { nombre: 'Ethereum', cantidad: '2', precio: '2,910.18$' },
    { nombre: 'Cardano', cantidad: '1000', precio: '0.5989$' },
    { nombre: 'Solana', cantidad: '10', precio: '127.94$' },
  ];
  
  return (
    <>
    <View style={styles.vista}>
      <View style={styles.areaBalanceWallet}>
        <View style={styles.balanceColumn}>
          <Text style={styles.textStyle}>Balance total (USD)</Text>
          <Text style={styles.balance}>${balance.toFixed(2)}</Text>
          <View style={styles.tituloColunmas}>
          <TouchableOpacity style={styles.btnDeposito} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Depósito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpciones}>
            <Text style={styles.textStyle}>Retirar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpciones}>
            <Text style={styles.textStyle}>Transeferir</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
      <ScrollView style={styles.listaActivos}>
        <View style={styles.itemActivo}>
        <Text style={styles.columnaTexto}>ACTIVO</Text>
        <Text style={styles.columnaTexto}>CANTIDAD</Text>
        <Text style={styles.columnaTexto}>PRECIO</Text>
        </View>
          {activosCripto.map((activo, index) => (
            <View key={index} style={styles.itemActivo}>
              <Text style={styles.textoActivo}>{activo.nombre}</Text>
              <Text style={styles.textoActivo}>{activo.cantidad}</Text>
              <Text style={styles.textoActivo}>{activo.precio}</Text>
            </View>
          ))}
        </ScrollView>
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
    </>
  )
}

export default Wallet