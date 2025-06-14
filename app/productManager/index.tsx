import { styles } from "@/app/_layout";
import AddForm from "@/components/AddForm";
import ProductList from "@/components/ProductList";
import { ProductContext } from "@/context/ProductContext";
import { Product } from "@/interface/Product";
import { formatCurrency } from "@/utils/formatCurrency";
import React, { useContext } from "react";
import { Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";

const demoProducts: Product[] = [
    { id: '1', name: 'Product 1', price: 1000, quantity: 2 },
    { id: '2', name: 'Product 2', price: 2000, quantity: 1 },
    { id: '3', name: 'Product 3', price: 1500, quantity: 3 }
];

export default function ProductManager() {
    const { products } = useContext(ProductContext);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <AddForm />

                <Text style={[styles.listTitle, { marginTop: 20 }]}>Product List</Text>
                {products.length === 0 ? (
                    <Text style={styles.noUsersText}>No products found</Text>
                ) : (
                    <>
                        <ProductList />
                        <View style={[styles.totalContainer, { margin: 10 }]}>
                            <Text style={styles.totalText}>💵 Total:</Text>
                            <Text style={styles.totalText}>
                                {formatCurrency(products.reduce((total, product) => total + (Number(product.price) * Number(product.quantity)), 0))}
                            </Text>
                        </View>
                    </>
                )}
            </SafeAreaView>
        </TouchableWithoutFeedback >
    );
};
