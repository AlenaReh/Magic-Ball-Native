import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import MagicBall1 from './assets/images/1.png';
import MagicBall2 from './assets/images/2.png';
import MagicBall3 from './assets/images/3.png';
import MagicBall4 from './assets/images/4.png';
import MagicBall5 from './assets/images/5.png';
import MagicBall6 from './assets/images/6.png';
import MagicBall7 from './assets/images/7.png';
import MagicBall8 from './assets/images/8.png';


const App = () => {
  const [ uri, setUri ] = useState(MagicBall1);
  const prediction = () => {
    let randomNumber = Math.floor(Math.random() * 8) + 1;

    switch(randomNumber) {
      case 1: setUri(MagicBall1);
      break;
      case 2: setUri(MagicBall2);
      break;
      case 3: setUri(MagicBall3);
      break;
      case 4: setUri(MagicBall4);
      break;
      case 5: setUri(MagicBall5);
      break;
      case 6: setUri(MagicBall6);
      break;
      case 7: setUri(MagicBall7);
      break;
      case 8: setUri(MagicBall8);
      break;
      default: setUri(MagicBall1);
    }
  }

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={uri} />
      <TouchableOpacity onPress={prediction}>
        <Text style={styles.text}>Ask your Question</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 300,
    height: 300
  },
  text:{
    padding: 12,
    fontSize: 35,
    color: '#0038A8',
    marginTop: 80,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#0038A8',
    borderWidth: 1.5,
  }
});

export default App;
