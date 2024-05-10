/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
// import ReactNativeHapticFeedback from "react-native-haptic-feedback";


import Diceone from '../assets/One.png'
import Dicetwo from '../assets/Two.png'
import Dicethree from '../assets/Three.png'
import Dicefour from '../assets/Four.png'
import Dicefive from '../assets/Five.png'
import Dicesix from '../assets/Six.png'


type DiceProp = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
// const options = {
//   enableVibrateFallback: true,
//   ignoreAndroidSystemSettings: false,
// };

const Dice = ({ imageUrl }: DiceProp): JSX.Element => {
  return (
    <Image style={styles.diceimage} source={imageUrl} />
  )
}

function App(): React.JSX.Element {
  const [diceImage, setdiceImage] = useState()

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1:
        setdiceImage(Diceone)
        break;
      case 2:
        setdiceImage(Dicetwo)
        break;
      case 3:
        setdiceImage(Dicethree)
        break;
      case 4:
        setdiceImage(Dicefour)
        break;
      case 5:
        setdiceImage(Dicefive)
        break;
      case 6:
        setdiceImage(Dicesix)
        break;

      default:
        setdiceImage(Diceone)
        break;
    }
    // ReactNativeHapticFeedback.trigger("impactLight", options);

  }
  return (
    <View style={styles.Container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rolldicebuttontext}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2'
  },
  Dicecontainer: {
    margin: 12
  },
  diceimage: {
    width: 200,
    height: 200,
  },
  rolldicebuttontext: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
});

export default App;
