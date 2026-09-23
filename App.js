import { StyleSheet, View } from 'react-native';
import PantallaProductos from './components/PantallaProductos';

export default function App() {
  return (
    <View style={styles.container}>
      <PantallaProductos></PantallaProductos>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //hace que el contenedor ocupe toda la pantalla
    backgroundColor: '#fff',
  },
});
