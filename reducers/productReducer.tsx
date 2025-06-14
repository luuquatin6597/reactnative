import { ProductAction } from "@/actions/ProductAction";
import { Product } from "@/interface/Product";

const productReducer = (state: Product[], action: ProductAction): Product[] => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'REMOVE_PRODUCT':
            return state.filter(product => product.id !== action.payload);
        default:
            return state;
    }
};

export default productReducer;