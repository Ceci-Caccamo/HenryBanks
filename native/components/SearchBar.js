import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


import * as Contacts from 'expo-contacts';

export default function SearchBar() {
  const [contacts, setContacts] = useState([{
    firstName:'gabriela',
    lastName:'marciano'
  },
  {
    firstName:'Juan',
    lastName:'Fernadez'
  },
  {
    firstName:'Ceci',
    lastName:'Caccamo'
  },
 ]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data)
        }
      }
    })();
  }, []);

  const searchContacts = value => {
    if(!value){
      setContacts(contacts)
    }else{
    const filteredContacts = contacts.filter(contact => {
      let contactLowercase = (contact.firstName + ' ' + contact.lastName).toLowerCase();
      let searchTermLowercase = value.toLowerCase();
      return contactLowercase.indexOf(searchTermLowercase) > -1 ; 
    });
    setResults(filteredContacts); }   
  };

  const renderItem = ({ item }) => ( 
    <View style={{ minHeight: 70, padding: 1,}}>
      <TouchableOpacity>
        <Text style={styles.items}>
        {item.firstName && item.firstName + ' '}
        {item.lastName && item.lastName}
      </Text>
      </TouchableOpacity>
    </View>);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginTop:0}}/>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#803975', '#0c222f']}
        style={{flex: 1}} >
        <View style={styles.box}>
                <View>
                <Link to="/Login">
                <Icon name="angle-left" color="#422C63" size={50} /></Link>
                </View>
          <TextInput placeholder="Ingresa un nombre" placeholderTextColor="#F5F5DC"  style={styles.input} onChangeText={value => searchContacts(value)}/>
          
      <View style={styles.flatList}>
      <FlatList data={ results.length === 0 ? contacts : results } renderItem={renderItem} keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => (
          <View><Text>No hay contactos</Text></View>
        )}
        />
        </View>
        </View>
        </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box:{
    margin:20,
  },
  input:{
    textAlign:'center',
    height: 50,
    fontSize: 20,
    color: '#F5F5DC', 
    borderRadius: 20,
    borderColor: '#9932CC',
    borderWidth:5,
  },
  items:{
    color: '#0c222f', 
    fontWeight: 'bold',
    fontSize: 24,
  },
  flatList:{
    backgroundColor: 'white', 
    opacity: 0.5,  
    borderRadius: 20,
  }
});