import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/images/1.png')} />
      <Text>Hello!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:300,
    height:300
  }
});

export default App;
