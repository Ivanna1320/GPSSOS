import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "../theme/appTheme";
import Icon from 'react-native-vector-icons/Ionicons';

export const NtfScreen = () => {

    useEffect(() => {
        console.log('NtfScreen effect');
    }, [])


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title2}>{item.title}</Text>
    </View>
  );

    return (
        <View >
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Notificaciones </Text>
            </View>
            <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            </View>
        </View>
    )
    
}


const data = [
    { id: '1', title: 'Elemento 1' },
    { id: '2', title: 'Elemento 2' },
    { id: '3', title: 'Elemento 3' },
    { id: '4', title: 'Elemento 4' },
    { id: '5', title: 'Elemento 5' },
  ];
