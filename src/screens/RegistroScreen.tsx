import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Button, Text, TextInput, TouchableOpacity  } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any>{};

export const RegistroScreen = ( {navigation}: Props ) => {
  return (
    <View >
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Registro </Text>
            </View>
            <View>
                <Text style={ styles.h3 }> imagen </Text>
            </View>
            <ScrollView>
                <Text style={ styles.h4login }> Nombre: </Text>
                <TextInput style={ styles.h5login } />
                <Text style={ styles.h4login }> Apellidos: </Text>
                <TextInput style={ styles.h5login } />
                <Text style={ styles.h4login }> Correo electronico: </Text>
                <TextInput style={ styles.h5login } />
                <Text style={ styles.h4login }> Contraseña: </Text>
                <TextInput style={ styles.h5login } />
                <Text style={ styles.h4login }> Confirmar contraseña : </Text>
                <TextInput style={ styles.h5login } />
                <Text style={ styles.h4login }> Celular: </Text>
                <TextInput style={ styles.h5login } />
                    
                <View style={styles.btningresar}>
                    <TouchableOpacity style={styles.ingresar}>
                        <Text style={styles.buttonIngresar}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
  )
}