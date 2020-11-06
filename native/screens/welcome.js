import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Button, Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';

function Welcome({navigation}) {
const onPressLogin = () => {navigation.navigate('Login');}
const onPressRegister = () => {navigation.navigate('Register');}

return (
<View style={styles.container}>
  <TouchableHighlight onPress={onPressLogin}>
    <View style={styles.button}>
      <Text>Ingresar</Text>
    </View>
  </TouchableHighlight>
  <TouchableHighlight onPress={onPressRegister}>
    <View style={styles.button}>
      <Text>Registrarse</Text>
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

export default Welcome;
