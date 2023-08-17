import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { colores, styles } from '../../theme/appTheme';
import useAuth from '../../hooks/useAuth';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable } from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { email, setEmail, password, setPassword, Login, googleSignIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [useData, setUserData] = useState({});


  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.jpeg')} style={styles.image} />
      </View>

      <View>
        <Text style={styles.h3}>INICIAR SESIÓN</Text>
      </View>
      <View style={styles.datos}>
        <Text style={styles.h4login}>Correo electrónico:</Text>
        <TextInput
          style={styles.h5login}
          value={email}
          keyboardType='email-address'
          placeholder='email@gmail.com'
          onChangeText={(email) => setEmail(email)}
          returnKeyType='next'
          blurOnSubmit={false}
        />

        <Text style={styles.h4login}>Contraseña:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={[styles.h5login, { flex: 1 }]}
            placeholder='**'
            value={password}
            onChangeText={(password) => setPassword(password)}
            keyboardType='default'
            returnKeyType='next'
            blurOnSubmit={false}
            secureTextEntry={!showPassword}
          />
          
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            onPress={() => setShowPassword(!showPassword)}
            size={35} 
          />
        </View>

        <Text style={styles.h6logintext}>
          ¿No tienes cuenta?
          <Text onPress={() => navigation.navigate('RegistroScreen')} style={styles.h6login}>
            Registrate
          </Text>
        </Text>

        <View style={styles.btningresar}>
          <TouchableOpacity style={styles.ingresar} onPress={Login}>
            <Text style={styles.buttonIngresar}>Ingresar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.h6logintext}>
          O Inicia sesión con tu cuenta Google: 
        </Text>

        <View style={ styles.btningresar }>
          <View style={styles.btnBox}>
            <Pressable
              onPress={() =>
                googleSignIn()
                  .then(res => {
                    console.log(res)
                    setUserData(res.user);
                  }).catch(error => console.log(error))
              }
            >
              <Text style={styles.buttonIngresar}>Google Sign in</Text>
            </Pressable>
          </View>
        </View>
        
        
      </View>
    </View>
  );
};