import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Button, Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';

function Menu({navigation}) {
const onPressLogout = () => {navigation.navigate('Login');}

return (
<View style={styles.container}>
  <TouchableHighlight onPress={onPressLogout}>
    <View style={styles.button}>
      <Text>Cerrar sesion</Text>
    </View>
  </TouchableHighlight>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

export default Menu;
