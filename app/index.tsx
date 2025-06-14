import { styles } from "@/app/_layout";
import React from "react";
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import ProductManager from "./productManager";

export default function Index() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <ProductManager />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};
