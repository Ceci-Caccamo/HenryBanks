import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Accordian({title, data}) {
  const [state, setState]= React.useState({
    data: data,
    expanded: false
  })  

  function toggleExpand(){
    state.expanded ? setState({expanded: false}) : setState({expanded: true})
  }

    return (
        <View style={styles.container}>

            <View>
              <TouchableOpacity onPress={toggleExpand}>
                <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <Icon name={state.expanded? "angle-up":"angle-down"} color="orange" size={25} />
                </View>
              </TouchableOpacity>
              {state.expanded ? <View style={styles.child}><Text style={styles.data}>{data}</Text></View> : null}
            </View>

        </View>
    )
}

export default function FAQ(){
    function renderAccordians(){
      const items = [];
      faqText.map(i => {
          items.push(
              <Accordian
                  title = {i.title}
                  data = {i.data}
              />
          );
      })
      console.log(faqText);
      return items;
    }
      return (
      <View style={styles.container}>
        <View><Text style={styles.title}>Olvide mi usuario, click aqui <Icon name="envelope-square" color="orange" size={25} /></Text></View>
        <View><Text style={styles.title}>Olvide mi contraseña, click aqui <Icon name="key" color="orange" size={25} /></Text></View>
        <ScrollView>
        { renderAccordians() }
        </ScrollView>
      </View>
    );
  }




const styles = StyleSheet.create({
  container:{
    backgroundColor: '#927192',
    flex: 1,
    paddingTop :30,
    justifyContent:'space-between'
  },
  row:{
    flexDirection:'row'
  },
  title:{
       fontSize: 16,
       fontWeight:'bold',
       color: 'white',
   },
   child:{
         backgroundColor: '#EEDCEE',
         padding:16,
   },
   data:{
        fontSize: 16,
        color: 'grey',
    },
});

const faqText=[
  {title: '¿En cuánto tiempo verifican mi cuenta bancaria?',
    data: ' Ni bien ingreses tus datos, el tiempo de verificación de la cuenta bancaria es de 24 horas hábiles.'
  },
  {title: '¿Es necesario vincular la cuenta bancaria para hacer un depósito?',
    data: 'Para hacer un depósito de saldo en tu cuenta no necesitas agregar una cuenta bancaria. Tenés otros métodos de fondeo: podes depositar por Mercado Pago o depositar en efectivo por Rapipago y PagoFacil'
  },
  {title: '¿Qué necesito para crear una cuenta?',
    data: 'Documento de identidad físico (Permanente o temporal). Teléfono celular a la mano. En caso de no contar con cámara en el dispositivo, debes tomar: Una foto en formato .jpg del documento de identidad (sin flash, y con datos legibles). Una selfie tuya en formato .jpg (la capacidad de estas fotos no debe superar los 2MB).'
  },
  {title: 'Comisiones por operaciones',
    data: 'Todas las operaciones son gratuitas'
  },
  {title: '¿Cómo protegerte de las estafas online?',
    data: 'Muchas ofertas que se presentan como negocios son en realidad estafas, tené cuidado de no ser víctima de fraude informático.Cuidate de las ofertas de negocios con ingresos rápidos y elevados. Si suena demasiado bueno para ser cierto, en general es porque es una estafa. Nunca permitas a terceros el uso de tu cuenta.'
  },
]
