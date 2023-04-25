import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Button, Text, Image  } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any, any>{};

export const PerfilScreen = ( {navigation}: Props ) => {
  return (
    <View style={ styles.globalMargin}>
      <View>
        <Text style={ styles.title }> Perfil </Text>
      </View>

      <View>
        <View style={styles.container}>
          <Image source={require('../assets/images/imgUser.png')} style={styles.image} />
        
        </View>

        <View>
          <Text style={ styles.h3 }> Nombre de Usuario </Text>
        </View>

        <View>
          <Text style={ styles.h4 }> Correo electronico: <Text style={ styles.h5 }> email@gmail.com </Text> </Text>
        </View>

        <View>
          <Text style={ styles.h4 }> Celular: <Text style={ styles.h5 }> 314 123 4567 </Text> </Text>
        </View>

        <View>
          <Text style={ styles.h4 }> Contactos: 
            <View style={ styles.btnVerMas}>
              <TouchableOpacity 
                onPress={ () => navigation.navigate('ContactosScreen')}
              >
                  <Text style={ styles.btnText }> Ver más </Text>
              </TouchableOpacity>
            </View>
          </Text>
        </View>

        <View>
          <Text style={ styles.h4 }> Agregar contacto: 
            <View style={ styles.btnVerMas}>
              <TouchableOpacity 
                onPress={ () => navigation.navigate('AgregarScreen')}
              >
                <Text style={ styles.texto }> <Icon name="person-add-outline"
                  size={25} 
                  color="white" /> </Text>
              </TouchableOpacity>
            </View> 
          </Text>
        </View>
        
      </View>
      
      <Button
        title="Ir página 2"
        onPress={ () => navigation.navigate('AgregarScreen') }
      />
      
      <Button 
        title='Login'
        onPress={() => navigation.navigate('LoginScreen')}
      />
       <Button 
        title='Registro'
        onPress={() => navigation.navigate('RegistroScreen')}
      />

      <View>
            <View style={ styles.ButtonCerrar}>
              <TouchableOpacity style={ styles.btnCerrar}
                onPress={ () => navigation.navigate('ContactosScreen')}
              >
                  <Text style={ styles.btnTextCerrar }> Cerrar Sesión <Text style={ styles.texto }> <Icon name="exit-outline"
                  size={25} 
                  color="white" /> </Text> </Text>
              </TouchableOpacity> 
            </View>
      </View>



    </View>
  )
}

