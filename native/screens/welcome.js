import React from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native';

const Welcome = () => {
  return (
    <ScrollView>
      <View>
        <Button title="Iniciar sesión"/>
      </View>
      <View>
        <Button title="Registrarse"/>
      </View>
    </ScrollView>
  )
}

export default Welcome ;
