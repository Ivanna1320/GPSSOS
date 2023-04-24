import { StyleSheet } from "react-native";

export const colores = {
    primary: '#9510C3',
    secondary: '#D800C2'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    nav:{
        fontSize:20
    },
    barra: {
        backgroundColor: colores.primary
    },
    titleBar: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15,
        color: 'white'
    },
    h3: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 40,
        color: colores.secondary
    },
    h4: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,
        color: colores.secondary
    },
    h5: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 5,
      color: 'black'
  },
  //diseños para los campos del login
    h4login: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 5,
      marginLeft: 5,
      padding: 10,
      color: '#D800C2'
  },
    h5login: {//estilo para los campos de entrada del login

      borderWidth: 1.8, 
      borderRadius: 20, 
      borderColor: '#E35FC4',
      fontSize: 18,
      backgroundColor: '#e3e2e2',
      fontWeight: 'bold',
      margin: 2,
      color: 'black'
  },
    h6login: {//estilo para las letras azules del login

      color: '#0075FF'
  },//estilo para el texto de registarse
    h6logintext: {

      fontWeight: 'bold',
      alignItems: "center",
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 15,
      fontSize: 15,
      margin: 5
  },
    ingresar: {

      fontSize: 30,
      marginTop: 15,
      width:250,
      borderRadius: 15,
      justifyContent: 'center',
      backgroundColor: colores.primary,
      alignItems: "center",
  },
    btningresar: {
      justifyContent: 'center',
      alignItems: "center",
},
datos: {
  margin: 15
},
    //Diseños de Tab Inicio
    circularButton: {
        width: 340,
        height: 340,
        borderRadius: 170,
        backgroundColor: colores.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {

        fontSize: 50,
        color: 'white',
        fontWeight: 'bold'
      },
      buttonIngresar: {
        padding: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
      },
      containerButton: {
        margin: 65,
        justifyContent: 'center',
        alignItems: 'center'
      },
      subTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 40,
        color: colores.secondary
      },

      //Diseños de Screen Notificaciones
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title2: {
        fontSize: 32,
      },
})