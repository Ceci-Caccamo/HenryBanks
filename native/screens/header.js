import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Link } from '@react-navigation/native';
import {View, Button, Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Header({navigation}) {
const onPressLogout = () => {console.log('salir')}
 
return (
  <View style={styles.container}>
    <TouchableHighlight>
    <Link to="/Menu">
      <Icon name="bars" color="white" size={25} />
      </Link>
    </TouchableHighlight>
    <TouchableHighlight>
    <View style={styles.logout}>
    <Link to="/Menu">
    <Icon name="home" color="white" size={25} /></Link>
    </View>
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
