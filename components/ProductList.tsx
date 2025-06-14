import { styles } from "@/app/_layout";
import { ProductContext } from "@/context/ProductContext";
import { Product } from "@/interface/Product";
import { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";

export default function ProductList() {
    const { products, dispatch } = useContext(ProductContext);
    const renderProductItem = ({ item }: { item: Product }) => (
        <ProductItem product={item} onDelete={(id) => dispatch({ type: 'REMOVE_PRODUCT', payload: id })} />
    );

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderProductItem}
            contentContainerStyle={styles.listContent}
            style={listStyles.container}
            showsVerticalScrollIndicator={true}
            maxToRenderPerBatch={10}
            windowSize={5}
        />
    );
}
const listStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        maxHeight: 400, // Giới hạn chiều cao của list
        marginBottom: 10,
    }
});