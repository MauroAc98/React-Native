import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.colorText}>Primera App de Mauro</Text>
      <Text style={styles.colorText}>Hola, esto es un texto de prueba</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063971',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  colorText:{
    color:'#ffffff',
    fontSize:28,
  }
  
});
