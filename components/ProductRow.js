import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native"

const ProdutRow = ({item}) => {
    return(
        <View style={styles.row}>
            <Text>{item.name}</Text>
            <Text>S/. {item.price}</Text>
        </View>
    )
}

//Hace que el componente se "memorice"
export default React.memo(ProdutRow);

const styles = StyleSheet.create({
    row: {
        padding: 15,
        borderBottomWidth: 1
    }
})