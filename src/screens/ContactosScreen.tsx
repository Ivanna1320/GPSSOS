import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any, any>{};

export const ContactosScreen = ({ navigation }: Props ) => {
  
  
  useEffect(() => {
    console.log('ContactosScreen effect');
  }, [])

  const ContactItem = ({ item }) => (
    <View style={styles.item2}>
      <Text style={styles.title2}>
        <Text>
          {item.img}
        </Text>
        {item.title}
      </Text>
        <Text>{item.texto}</Text>
        <Text>{item.icon}</Text>
      
    </View>
  );

  return (

    <View>
      <View style={ styles.barra}>
        <Text style={ styles.titleBar }> Contactos </Text>
      </View>

      <View style={ styles.globalMargin}>
      
        <View >
            <View>
              <FlatList
                  data={dataContact}
                  renderItem={ContactItem}
                  keyExtractor={(item) => item.id}
              />
            </View>
        </View>
      
        {/* <Button
          title="Regresar"
          onPress={ () => navigation.pop() }
        />
        <Button
          title="Ir a Página 1"
          onPress={ () => navigation.popToTop() }
        /> */}
      </View>

    </View>
    
  )
}

const dataContact = [
  { id: '1', 
    title: 'Nombre de contacto',
    img: <Image source={require('../assets/images/imgUser.png')} style={styles.iconImg} />,
    texto: <Text style={ styles.texto }> <Text style={ styles.negrita }> ID: </Text> 123 456 789 </Text>,
    icon: <TouchableOpacity>
              <Text>
                <Icon name="trash-outline"
                  size={25} 
                  color="red" />
              </Text>
          </TouchableOpacity>
  },

  { id: '2', 
    title: 'Nombre de contacto',
    img: <Image source={require('../assets/images/imgUser.png')} style={styles.iconImg} />,
    texto: <Text style={ styles.texto }> <Text style={ styles.negrita }> ID: </Text> 123 456 789 </Text>,
    icon: <TouchableOpacity>
              <Text>
                <Icon name="trash-outline"
                  size={25} 
                  color="red" />
              </Text>
          </TouchableOpacity>
  }
  ];

