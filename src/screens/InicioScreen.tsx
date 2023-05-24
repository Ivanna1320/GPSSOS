import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../theme/appTheme";

export const InicioScreen = () => {

    useEffect(() => {
        console.log('InicioScreen effect');
    }, []) 

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonPress = () => {
        // Lógica para manejar el evento del botón
        setIsButtonDisabled(true); // Bloquea el botón al hacer clic
        // Ejemplo de desbloqueo del botón después de 10 segundos
        setTimeout(() => {
        setIsButtonDisabled(false);
        }, 10000);
    };

    return (
        <View >
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Inicio </Text>
            </View>
            <View>
                <View style={ styles.containerButton }>
                    <Text style={ styles.subTitle }> Botón de Panico </Text>
                    <TouchableOpacity style={styles.circularButton}
                        onPress={handleButtonPress}
                        disabled={isButtonDisabled}>
                        <Text style={styles.buttonText}
                            >S.O.S</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}