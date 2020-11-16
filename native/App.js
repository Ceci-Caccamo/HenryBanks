import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //instalar
import { createStackNavigator } from "@react-navigation/stack"; //instalar
import Register from "./screens/Register";
import { Provider } from "react-redux";
import { st } from "./store/store";
import Estatistics from "./screens/Estatistics";
import Login from "./screens/Login";
import PosConsolidada from "./screens/PosConsolidada";
import Welcome from "./screens/welcome";
import SendMonyScreen from "./screens/SendMonyScreen";
import Transactions from "./screens/Transactions";
import RegisterModal from "./components/RegisterModal";
import AltaUSer from './screens/AltaUser'
import Contacto from './screens/Contact'
import Ionicons from 'react-native-vector-icons/Ionicons';




// import Header from './screens/header';
// import Menu from './screens/menu';
import FAQ from './screens/FAQ';

const Stack = createStackNavigator(); //contiene la navegacion
//stack.screen contiene la pantalla
function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Contacto' >
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Menu"
        component={Menu}
        // options={{ headerShown: false }}
      /> */}
			<Stack.Screen
				name='Register'
				component={Register}
				options={{ title: 'Registrarse' }}
			/>
			<Stack.Screen
				name='Estatistics'
				component={Estatistics}
				// options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Login'
				component={Login}
				options={{ title: 'Iniciar sesión' }}
			/>
			{/* <Stack.Screen
        name="Header"
        component={Header}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="PosConsolidada"
        component={PosConsolidada}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="RechargeScreen"
        component={RechargeScreen}
        // options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="SendMonyScreen"
        component={SendMonyScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transactions"
        component={Transactions}
        // options={{ headerShown: false }}
      />
      <Stack.Screen name="RegisterModal" component={RegisterModal} />
      <Stack.Screen name="AltaUSer" component={AltaUSer} />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        // options={{ headerShown: false }}
      />
      <Stack.Screen 
      name="Contacto" 
      component={Contacto}
       options={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'indigo', shadowColor: 'indigo', elevation: 0 },
        headerTitleStyle: { color: 'white', fontSize: 16 },
        headerLeft: () => <Ionicons name='ios-menu' color='white' size={30} style={{ marginHorizontal: 15 }}></Ionicons>,
        headerRight: () => <Ionicons name='ios-more' color='white' size={30} style={{ marginHorizontal: 15}} ></Ionicons>,
        
      }} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={st}>
      <NavigationContainer style={styles.container}>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
