import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { colores, styles } from '../../theme/appTheme';
import useAuth from '../../hooks/useAuth';
import { IconButton } from 'react-native-paper';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { email, setEmail, password, setPassword, Login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

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
          <IconButton
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
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
      </View>
    </View>
  );
};