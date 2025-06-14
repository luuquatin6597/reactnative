import { styles } from "@/app/_layout";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function AddForm() {
    const { dispatch } = useContext(ProductContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = () => {
        if (name && price && quantity) {
            dispatch({ type: 'ADD_PRODUCT', payload: { id: Date.now().toString(), name, price, quantity } });
            Alert.alert('Success', 'Product added successfully!');
            setName('');
            setPrice(0);
            setQuantity(0);
        } else {
            Alert.alert('Error', 'Please fill in all fields.');
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>
                Add Product
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter product name"
                value={name}
                onChangeText={setName}
                placeholderTextColor={'#888'}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter price"
                value={price.toString()}
                onChangeText={(text) => setPrice(Number(text))}
                placeholderTextColor={'#888'}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter quantity"
                value={quantity.toString()}
                onChangeText={(text) => setQuantity(Number(text))}
                placeholderTextColor={'#888'}
                keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleSubmit} style={[styles.gradientButton, styles.shadow]}>
                <Text style={styles.buttonText}>
                    Add Product
                </Text>
            </TouchableOpacity>
        </View>
    )
}