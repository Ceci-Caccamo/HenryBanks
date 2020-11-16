import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome";


export default class MenuContact extends React.Component {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <Provider>
        <View
          style={{
            paddingTop: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}>
          <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <Icon name= "ellipsis-v" color= 'white' size={30} onPress={this._openMenu}></Icon>
            }
          >
            <Menu.Item onPress={() => {}} title="Agregar Contacto" />
            <Menu.Item onPress={() => {}} title="Actualizar" />
            <Menu.Item onPress={() => {}} title="Eliminar" />
           
           {/*  <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" /> */}
          </Menu>
                    {/* <Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <Button onPress={this._openMenu}>Show menu</Button>
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu> */}
        </View>
      </Provider>
    );
  }
}