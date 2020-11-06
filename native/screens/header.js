import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Button, Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'

function Header({navigation}) {
  const {state, setState} = useState(false);
  const openMenu = () => {navigation.navigate('Menu')}

return (
<View style={styles.container}>
  <TouchableHighlight onPress={openMenu}>
    <IonIcons name="menu-outline" color="white" size={35}/>
  </TouchableHighlight>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: '#f4511e',
    fontWeight: 'bold',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

export default Header;
