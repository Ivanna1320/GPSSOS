import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Button, Text  } from 'react-native'
import { colores, styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};

export const PerfilScreen = ( {navigation}: Props ) => {
  return (
    <View style={ styles.globalMargin}>
      <View>
        <Text style={ styles.title }> Perfil </Text>
      </View>

      <View>
        <View>
          <Text style={ styles.h3 }> Nombre de Usuario </Text>
        </View>
        <View>
          <Text style={ styles.h4 }> Correo electronico: <Text style={ styles.h5 }> email@gmail.com </Text> </Text>
        </View>
      </View>
      
      <Button
        title="Ir página 2"
        onPress={ () => navigation.navigate('AgregarScreen') }
      />
      <Button
        title="Agregar Contacto"
        onPress={ () => navigation.navigate('AgregarScreen') }
      />
      <Button
        title="Ver más"
        onPress={ () => navigation.navigate('ContactosScreen') }
      />
      <Button
        title="Cerrar Sesión"
      />
      <Button 
        title='Login'
        onPress={() => navigation.navigate('LoginScreen')}
      />
       <Button 
        title='Registro'
        onPress={() => navigation.navigate('RegistroScreen')}
      />
    </View>
  )
}

