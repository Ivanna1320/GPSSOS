import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "../theme/appTheme";
import Icon from 'react-native-vector-icons/Ionicons';

export const NtfScreen = () => {

    useEffect(() => {
        console.log('NtfScreen effect');
    }, [])


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title2}>
        <Text>
          {item.icon}
        </Text>
        {item.title}
      </Text>
        <Text>{item.texto}</Text>
      
    </View>
  );

    return (
        <View >
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Notificaciones </Text>
            </View>
            <View style={ styles.globalMargin}>
              <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
              />
            </View>
        </View>
    )
    
}


const data = [
  { id: '1', 
    title: 'Solicitud Aceptada', 
    icon: <Icon name="checkmark-circle"
      size={25} 
      color="green" />,
    texto: <Text style={ styles.texto }> <Text style={ styles.negrita }>Nombre de Usuario</Text> ha aceptado tu solicitud</Text> 
  },

  { id: '2', 
    title: 'Solicitud Rechazada',
    icon: <Icon name="close-circle"
      size={25} 
      color="red" />,
      texto: <Text style={ styles.texto }> <Text style={ styles.negrita }>Nombre de Usuario</Text> ha rechazado tu solicitud</Text> 
  },
  { id: '3', title: 'Elemento 3' },
  ];
