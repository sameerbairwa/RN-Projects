import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceTree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  // let uri = DiceFive;
  const [uri1, setUri1] = useState(DiceSix);
  const [uri2, setUri2] = useState(DiceSix);
  const [uri3, setUri3] = useState(DiceSix);
  const [uri4, setUri4] = useState(DiceSix);

  const playButtonTapped = (uri) => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        if (uri === 1) {
          setUri1(DiceOne);
        } else if (uri === 2) {
          setUri2(DiceOne);
        } else if (uri === 3) {
          setUri3(DiceOne);
        } else if (uri === 4) {
          setUri4(DiceOne);
        }
        break;
      case 2:
        if (uri === 1) {
          setUri1(DiceTwo);
        } else if (uri === 2) {
          setUri2(DiceTwo);
        } else if (uri === 3) {
          setUri3(DiceTwo);
        } else if (uri === 4) {
          setUri4(DiceTwo);
        }
        break;
      case 3:
        if (uri === 1) {
          setUri1(DiceTree);
        } else if (uri === 2) {
          setUri2(DiceTree);
        } else if (uri === 3) {
          setUri3(DiceTree);
        } else if (uri === 4) {
          setUri4(DiceTree);
        }

        break;
      case 4:
        if (uri === 1) {
          setUri1(DiceFour);
        } else if (uri === 2) {
          setUri2(DiceFour);
        } else if (uri === 3) {
          setUri3(DiceFour);
        } else if (uri === 4) {
          setUri4(DiceFour);
        }

        break;
      case 5:
        if (uri === 1) {
          setUri1(DiceFive);
        } else if (uri === 2) {
          setUri2(DiceFive);
        } else if (uri === 3) {
          setUri3(DiceFive);
        } else if (uri === 4) {
          setUri4(DiceFive);
        }
        break;
      case 6:
        if (uri === 1) {
          setUri1(DiceSix);
        } else if (uri === 2) {
          setUri2(DiceSix);
        } else if (uri === 3) {
          setUri3(DiceSix);
        } else if (uri === 4) {
          setUri4(DiceSix);
        }
        break;

      default:
        setUri1(DiceOne);
        setUri2(DiceOne);
        setUri3(DiceOne);
        setUri4(DiceOne);

        break;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#222831" />
      <View style={styles.container}>
        {/* <Image style={styles.image} source={uri} /> */}
        <View>
          <TouchableOpacity
            onPress={() => {
              playButtonTapped(1);
            }}>
            <Image style={styles.image} source={uri1} />
            {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              playButtonTapped(2);
            }}>
            <Image style={styles.image} source={uri2} />
            {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              playButtonTapped(3);
            }}>
            <Image style={styles.image} source={uri3} />
            {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              playButtonTapped(4);
            }}>
            <Image style={styles.image} source={uri4} />
            {/* <Text style={styles.gamePlayButton}>Play Game</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#222831',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 150,
    height: 150,
  },
  gamePlayButton: {
    fontSize: 20,
    paddingVertical: 10,
    marginTop: 20,
    color: '#F2A365',
    paddingHorizontal: 40,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});
