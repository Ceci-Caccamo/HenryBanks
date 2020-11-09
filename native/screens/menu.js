import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Dimensions, View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window')

function Menu({navigation}) {
const onPressLogout = () => {console.log('salir')}

return (
  <View style={styles.menu}>
    <ScrollView>
      <TouchableOpacity onPress={onPressLogout}>
        <View style={styles.logout}>
          <Text  style={{color: '#fff'}}>Recargar saldo </Text>
          <Icon name="caret-right" color="orange" size={25} />
        </View>
      </TouchableOpacity>

    </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#1D3448',
    flex: 1,
    width:width/2,
    height:height/4,
    padding:10,
    justifyContent:'space-between'
  },
  logout:{
    flexDirection:'row'
  }
});

export default Menu;
