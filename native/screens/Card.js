import React, { Component } from 'react'
import { StyleSheet, ScrollView, Switch, ImageBackground, TouchableOpacity, View, Text } from 'react-native'
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronCircleDown,faChevronCircleUp, faChartLine } from '@fortawesome/free-solid-svg-icons';

const style = StyleSheet.create({
  switch: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  tarjeta: {
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 25,
  },

  container: {
    backgroundColor: '#F5F5F5',
    marginTop: 80,
  },
  label: {
    color: 'black',
    fontSize: 12,
  },
  mainActionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginBottom: 30,
		marginTop: 80,
  },
  largeButtonContainer: {
		width: '100%',
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
  },
  text: {
		color: 'black',
		fontSize: 14,
		textAlign: 'center',	
	},
  input: {
    fontSize: 16,
    color: 'black',
  },
})


const image = { uri: 'https://cdn.pixabay.com/photo/2016/05/22/20/13/background-1409125_960_720.png' };
export default class Card extends Component {
  state = { useLiteCreditCardInput: false }

  _onChange = formData => console.log(JSON.stringify(formData, null, ' '))

  _onFocus = field => console.log('focusing', field)

  _setUseLiteCreditCardInput = useLiteCreditCardInput =>
    this.setState({ useLiteCreditCardInput })

  render() {
    return (
      <View>

          <ScrollView style={style.container}>
            <Text style={style.tarjeta}>Mis Tarjetas</Text>

              <CreditCardInput
                autoFocus
                requiresName
                requiresCVC
                requiresPostalCode
                labelStyle={style.label}
                inputStyle={style.input}
                validColor="black"
                invalidColor="red"
                placeholderColor="darkgray"
                onFocus={this._onFocus}
                onChange={this._onChange}
              />
          

            <View style={style.mainActionsContainer}>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        alert('Recargar');
                      }}
                      style={style.largeButtonContainer}
                    >
                      <FontAwesomeIcon icon={faChevronCircleDown} style={{ color: 'black' }} size={44} />
                      <Text style={style.text}>Recargar</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        alert('Mandar');
                      }}
                      style={style.largeButtonContainer}
                    >
                      <FontAwesomeIcon icon={faChevronCircleUp} style={{ color: 'black' }} size={44} />
                      <Text style={style.text}>Mandar</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        alert('Estad');
                      }}
                      style={style.largeButtonContainer}
                    >
                      <FontAwesomeIcon icon={faChartLine} style={{ color: 'black' }} size={44} />
                      <Text style={style.text}>Estadisticas</Text>
                    </TouchableOpacity>
                  </View>
                </View>
          </ScrollView>

    </View>
    )
  }
}