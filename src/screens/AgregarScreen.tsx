import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';

export const AgregarScreen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Agregar Contacto', //Cambia el titulo de la PantallaScreen
    })
  }, [])

  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title }> AgregarScreen </Text>
      <Button
        title="Agregar"
      />
    </View>
  )
}

