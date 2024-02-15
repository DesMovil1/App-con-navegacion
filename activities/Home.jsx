import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

const Home = () => {
    const DATOS_ACTIVOS=[
        {
            nombre:'BTC',
            precio:'51,841.11$',
            cambio:'+0.36%'
        },
        {
            nombre:'BNB',
            precio:'352.6$',
            cambio:'+6.33%'
        },
        {
            nombre:'ETH',
            precio:'2,910.18$',
            cambio:'+2.46%'
        },
        {
            nombre:'ADA',
            precio:'0.5989$',
            cambio:'+5.44%'
        }
    ]

  return (
    <View style={styles.vista}>
      <View style={styles.areaBalance}>
        <View style={styles.balanceColumn}>
          <Text style={styles.textStyle}>Balance total (USD)</Text>
          <Text style={styles.balance}> $4500.97</Text>
        </View>
        <View style={styles.depositColumn}>
          <TouchableOpacity style={styles.btnDeposito}>
            <Text style={styles.textStyle}>Deposito</Text>
          </TouchableOpacity>
        </View>
      </View>

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

const styles = StyleSheet.create({
  vista: {
    width: '100%',
    height: '100%',
    backgroundColor: '#181A20',
  },
  areaBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 0.2,
  },
  balanceColumn: {
    justifyContent: 'center', 
  },
  depositColumn: {
    justifyContent: 'center',
  },
  textStyle: {
    color: '#EAECEF',
    fontWeight: 'bold',
  },
  balance: {
    color: '#EAECEF',
    fontWeight: 'bold',
    fontSize: 25,
  },
  btnDeposito:{
    color:'black',
    padding: 10,
    backgroundColor: '#E6C333',
    fontWeight: 'bold',
    borderRadius: 7,
  },
  tituloColunmas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom:15
  },
  activos: {
    padding:15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  columnaTexto: {
    color: '#EAECEF',
    fontWeight: 'bold',
  },
  btnPrecio:{
    color:'white',
    backgroundColor:'#0ECB7B',
    padding:10,
    borderRadius:5
  }
});

export default Home;
