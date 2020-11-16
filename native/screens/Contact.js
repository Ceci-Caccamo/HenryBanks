import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import MenuContact from "../components/MenuContacts";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        Contacto
      </Text>
      <MenuContact style={{
        
      }} />
</View>
      <View>
        <SearchBar 
        style={{
          zIndex: -10,
          elevation:3 }} />
      </View>
      </View>
    
  );
};
export default Contacts;
