import { ProductAction } from "@/actions/ProductAction";
import { Product } from "@/interface/Product";
import { createContext } from "react";
const ProductContext = createContext<{ products: Product[]; dispatch: React.Dispatch<ProductAction> }>({
    products: [],
    dispatch: () => { },
});
export { ProductContext };

