
import { StyleSheet, Text, View } from 'react-native';
import FirstNav from './activities/FirstNav';


export default function App() {
  return (
      <FirstNav/>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
