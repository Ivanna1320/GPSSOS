import React, { useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../theme/appTheme";

export const InicioScreen = () => {

    useEffect(() => {
        console.log('InicioScreen effect');
    }, []) 

    return (
        <View >
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Inicio </Text>
            </View>
            <View>
                <View style={ styles.containerButton }>
                    <Text style={ styles.subTitle }> Botón de Panico </Text>
                    <TouchableOpacity style={styles.circularButton}>
                        <Text style={styles.buttonText}>S.O.S</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
            
        </View>
    )
}