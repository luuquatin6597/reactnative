import { Product } from "@/interface/Product";
import { formatCurrency } from "@/utils/formatCurrency";
import { router } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductItem({ product, onDelete }: { product: Product; onDelete: (id: string) => void }) {
    return (
        <View style={styles.productItem}>
            <TouchableOpacity onPress={() => router.push({ pathname: "/product/[id]", params: { id: product.id } })}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>Price: {formatCurrency(product.price)}</Text>
                <Text style={styles.quantity}>Quantity: {product.quantity}</Text>
                <Text style={styles.total}>Total: {formatCurrency(product.price * product.quantity)}</Text>
            </TouchableOpacity>
            <View style={styles.userActions}>
                <TouchableOpacity
                    style={[styles.deleteButton]}
                    onPress={() =>
                        Alert.alert(
                            'Confirm Remove',
                            `Are you sure you want to remove ${product.name}?`,
                            [
                                { text: 'Cancel', style: 'cancel' },
                                {
                                    text: 'Remove',
                                    onPress: () => {
                                        onDelete(product.id);
                                        Alert.alert('Success', 'Product removed successfully!');
                                    },
                                },
                            ],
                            { cancelable: true }
                        )
                    }
                >
                    <Text style={styles.buttonText}>REMOVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#666',
    },
    quantity: {
        fontSize: 16,
        color: '#666',
    },
    total: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2a9d8f',
        marginTop: 5,
    },
    userActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 5,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    }
});