import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  // randomColor = 'rgb(32,0,126)';

  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');

  const changeBG = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    setRandomColor(color);
  };

  const doReset = () => {
    setRandomColor('rgb(0,0,0)');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.Text}>Tap Me </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={doReset}>
          <Text style={[styles.Text, {paddingHorizontal: 48}]}> Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 20,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
    marginVertical: 10,
  },
});
