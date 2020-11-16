import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../../components/SearchBar";
import MenuContact from "../../components/MenuContacts";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
//Lista Contactos usuarios de HenryBanks Agregados
//un boton agregar contacto
//Buscador sobre los contactos
//lista de usuarios


const Contacts = () => {
  return (
    <View>
    <View
      style={{
        flex:1,
        backgroundColor: "indigo",
        shadowColor: "indigo",
        size: 20,
        color: "white",
        fontSize: 20,
        height: 40,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <View >
        <Ionicons /* Menu hamburguesa */
          name="ios-menu"
          color="white"
          size={30}
          style={{ marginHorizontal: 15 }}
        ></Ionicons>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          height: 40,
          /* flexDirection: "row", */
        }}
      >
        Contacto HenryBank
      </Text>
      <MenuContact style={{
        
      }} />
</View>
      <View>
        <SearchBar 
        style={{
          padding:50
         
          }} />
      </View> 
      </View>
    
  );
};
export default Contacts;
