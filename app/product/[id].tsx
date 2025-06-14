import { ProductContext } from "@/context/ProductContext";
import { formatCurrency } from "@/utils/formatCurrency";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useContext } from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../_layout";

export default function DetailProduct() {
    const router = useRouter();
    const { products, dispatch } = useContext(ProductContext);
    const { id } = useLocalSearchParams();
    const product = products.find((p) => p.id === id);

    React.useEffect(() => {
        if (!product) {
            Alert.alert('Lỗi', 'Không tìm thấy sản phẩm!');
            router.back();
        }
    }, [product, router]);

    const handleDeleteConfirmation = () => {
        if (!product) return;
        Alert.alert(
            'Xác nhận xóa',
            `Bạn có chắc chắn muốn xóa sản phẩm ${product.name}?`,
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Xóa',
                    onPress: () => {
                        dispatch({ type: 'REMOVE_PRODUCT', payload: product.id });
                        router.back();
                        Alert.alert('Thành công', 'Sản phẩm đã được xóa!');
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: true }
        );
    };

    if (!product) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.noUsersText}>Đang tải hoặc không tìm thấy sản phẩm...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.detailCard}>
                <Text style={styles.detailTitle}>📦 Product Details</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 10, paddingTop: 10 }}>
                    <Text style={styles.detailLabel}>📌 Name:</Text>
                    <Text style={styles.detailValue}>{product.name}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 10, paddingTop: 10 }}>
                    <Text style={styles.detailLabel}>💰 Price:</Text>
                    <Text style={[styles.detailValue, { color: '#e63946' }]}>{formatCurrency(product.price)}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 10, paddingTop: 10 }}>
                    <Text style={styles.detailLabel}>📦 Quantity:</Text>
                    <Text style={styles.detailValue}>{product.quantity}</Text>
                </View>

                <View style={[styles.totalContainer, { marginTop: 10 }]}>
                    <Text style={styles.totalText}>💵 Total:</Text>
                    <Text style={styles.totalText}>
                        {formatCurrency(Number(product.quantity) * Number(product.price))}
                    </Text>
                </View>

                <TouchableOpacity
                    style={[styles.button, { marginTop: 20, flexDirection: 'row', justifyContent: 'center' }]}
                    onPress={() => router.back()}
                >
                    <Text style={[styles.buttonText, { backgroundColor: '#e63946' }]}>Close</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}