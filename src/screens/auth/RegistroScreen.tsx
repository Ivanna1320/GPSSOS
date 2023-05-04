import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, Image  } from 'react-native';
import { colores, styles } from '../../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';
import useAuth from '../../hooks/useAuth'

import database from '@react-native-firebase/database'

interface Props extends StackScreenProps<any, any>{};

export const RegistroScreen = ( {navigation}: Props ) => {

    const { email, setEmail, password, setPassword, onRegister} = useAuth()

    return (
    <View >
              
        <ScrollView>
            <View style={ styles.globalMargin}>
                <View style={styles.container}>
                    <Image source={require('../../assets/images/logo.jpeg')} style={styles.image} />
                </View>

                <View>
                    <Text style={ styles.h3 }> REGISTRO </Text>
                </View>

                <Text style={ styles.h4login }> Nombre: </Text>
                    <TextInput style={ styles.h5login } 
                        placeholder='Nombre'
                        //onChangeText={val => setNombre(val)}
                    />

                <Text style={ styles.h4login }> Apellidos: </Text>
                    <TextInput style={ styles.h5login } />

                <Text style={ styles.h4login }> Correo electronico: </Text>
                    <TextInput style={ styles.h5login }
                        placeholder='Email'
                        onChangeText={email => setEmail(email)}
                        autoCapitalize='none'
                        value={email}
                        keyboardType='email-address'  
                        returnKeyType='next' 
                        blurOnSubmit={false}
                    />
                
                <Text style={ styles.h4login }> Contraseña: </Text>
                    <TextInput style={ styles.h5login } 
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        value={password}
                        keyboardType='email-address'  
                        returnKeyType='next' 
                        blurOnSubmit={false}
                    />
                
                <Text style={ styles.h4login }> Confirmar contraseña : </Text>
                    <TextInput secureTextEntry={true} style={ styles.h5login } />
                
                <Text style={ styles.h4login }> Celular: </Text>
                    <TextInput keyboardType='numeric' style={ styles.h5login } />

                <Text style={ styles.h6logintext }>¿Ya tienes una cuenta?
                    <Text 
                        onPress={ () => navigation.navigate('LoginScreen') } 
                        style={ styles.h6login }> Iniciar Sesión
                    </Text>
                </Text>

                <View style={styles.btningresar}>
                    <TouchableOpacity style={styles.ingresar} onPress={onRegister}>
                        <Text style={styles.buttonIngresar}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
    </View>
  )
}