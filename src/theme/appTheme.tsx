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
        fontSize: 80,
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