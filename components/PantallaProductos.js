import { useCallback, useMemo, useRef, useState } from "react";
import productos from "../data/products";
import ProductRow from "./ProductRow";
import { FlatList, StyleSheet, View } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";

export default function PantallaProductos() {
    const [query, setQuery] = useState(""); //producto
    const [minPrice, setMinPrice] = useState(""); //precio mínimo

    const inputRef = useRef(null); //referencia al campo de texto

    //useMemo: filtrar y ordenar
    const filtrarProductos = useMemo(() => {
        return productos.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
        //filtra por precio mínimo
        .filter((p) => minPrice ? p.price >= parseInt(minPrice) : true)
        //filtra alfabéticamente
        .sort((a, b) => a.name.localeCompare(b.name));
    }, [query, minPrice]);

    //useCallback: handlers
    //Para ingresar el nombre del prodcuto
    const onChangeQuery = useCallback((text) => {
        setQuery(text);
    }, []);

    //Para ingresar el precio mínimo del producto
    const onChangeMinPrice = useCallback((text) => {
        setMinPrice(text);
    }, []);

    //Limpia
    const clear = useCallback(() => {
        setQuery("");
        setMinPrice("");
        inputRef.current?.focus();
    }, []);

    //Enfoca el input
    const focusInput = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    //Cada producto mostrar con "ProductRow"
    //{item} = cada producto individual
    const renderItem = useCallback(({item}) => {
        return <ProductRow item={item}></ProductRow>
    }, []);

    //Le da una clave única a cada elemento
    const keyExtractor = useCallback((item) => item.id, []);

    return(
        <View style={styles.container}>
            <TextInput
                ref={inputRef} placeholder="Buscar..."
                value={query}
                onChangeText={onChangeQuery}
                style={styles.input}
            ></TextInput>
            <TextInput
                ref={inputRef} placeholder="Precio mínimo..."
                value={minPrice}
                onChangeText={onChangeMinPrice}
                keyboardType="numeric"
                style={styles.input}
            ></TextInput>

            <View style={styles.buttonRow}>
                <Button onPress={clear} title="Limpiar"></Button>
            </View>
            
            <FlatList
                data={filtrarProductos}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 130,
        paddingBottom: 75,
        padding: 42,
    },

    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
        borderRadius: 7
    },

    buttonRow: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },

    button: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 8,
        marginRight: 10,
    },
})