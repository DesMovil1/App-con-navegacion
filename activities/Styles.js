import { StyleSheet } from "react-native";

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
    btnDeposito: {
      padding: 10,
      backgroundColor: '#E6C333',
      borderRadius: 7,
    },
    btnOpciones: {
      padding: 10,
      backgroundColor: 'gray',
      borderRadius: 7,
    },
    tituloColunmas: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      marginBottom: 15,
    },
    activos: {
      padding: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    columnaTexto: {
      color: '#EAECEF',
      fontWeight: 'bold',
    },
    btnPrecio: {
      color: 'white',
      backgroundColor: '#0ECB7B',
      padding: 10,
      borderRadius: 5,
    },
    modalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#181A20',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      marginBottom: 20,
      width: '100%',
    },
    btnModalDeposit: {
      padding: 10,
      backgroundColor: '#E6C333',
      borderRadius: 7,
    },
    areaBalanceWallet: {
      justifyContent: 'space-between',
      width: '100%',
      padding: 15,
      borderBottomColor: 'white',
      borderBottomWidth: 0.2,
    },
    listaActivos: {
      marginTop: 20,
    },
    itemActivo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      
    },
    textoActivo: {
      color: '#EAECEF',
    },
  });

  export default styles;