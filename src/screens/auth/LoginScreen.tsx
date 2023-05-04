import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity  } from 'react-native'
import { colores, styles } from '../../theme/appTheme'
import useAuth from '../../hooks/useAuth'

interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ( {navigation}: Props ) => {

    const {email, setEmail, password, setPassword, Login} = useAuth()

    return (
    <View >
        
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.jpeg')} style={styles.image} />
        </View>

        <View>
            <Text style={ styles.h3 }> INICIAR SESIÓN </Text>
        </View>
        <View style={ styles.datos }>
            
            <Text style={ styles.h4login }> Correo electronico: </Text>
                <TextInput style={ styles.h5login }
                    value={email}
                    keyboardType='email-address' 
                    placeholder="email@gmail.com"  
                    onChangeText={email => setEmail(email)}
                    returnKeyType='next' 
                    blurOnSubmit={false}
                />

            <Text style={ styles.h4login }> Contraseña: </Text>
                <TextInput style={ styles.h5login }
                    placeholder="********"
                    value={password}   
                    onChangeText={password => setPassword(password)}
                    keyboardType='email-address'  
                    returnKeyType='next' 
                    blurOnSubmit={false}
                    secureTextEntry 
                />
            <Text style={ styles.h6logintext }>¿No tienes cuenta?
                <Text 
                    onPress={ () => navigation.navigate('RegistroScreen') } 
                    style={ styles.h6login }> Registrate 
                </Text>
            </Text>

            <View style={styles.btningresar}>
                <TouchableOpacity style={styles.ingresar} onPress={Login}>
                    <Text style={styles.buttonIngresar}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}




/*
interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ({navigation}: Props ) => {

    useEffect(() => {
        console.log('LoginScreen effect');
    }, []) 

    return (
        <View >
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Inicio </Text>
            </View>
            <View>
                <Text style={ styles.h3 }> Inicar sesion </Text>
            </View>
            <View>
                <Text style={ styles.h4login }> Correo electronico: </Text>
                <TextInput style={ styles.h5login }></TextInput>
                <Text style={ styles.h4login }> Contraseña: </Text>
                <TextInput style={ styles.h5login }></TextInput>
            </View>
            <Button 
                title="Iniciar sesion" 
                onPress={ () => navigation.navigate('AgregarScreen') } />
        </View>
    )
}*/