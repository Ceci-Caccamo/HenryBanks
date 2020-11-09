import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Button, Text, ScrollView, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Header({navigation}) {
const onDisplayMenu = () => {navigation.navigate('Menu');}
const onPressLogout = () => {console.log('salir')}

return (
  <View style={styles.container}>
    <TouchableHighlight onPress={onDisplayMenu}>
      <Icon name="bars" color="white" size={25} />
    </TouchableHighlight>
    <TouchableHighlight onPress={onPressLogout}>
      <View style={styles.logout}>
        <Icon name="sign-out" color="orange" size={25} />
      </View>
    </TouchableHighlight>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D3448',
    height:60,
    justifyContent:'space-between',
    padding:30,
    flexDirection:'row'
    },
});

export default Header;
