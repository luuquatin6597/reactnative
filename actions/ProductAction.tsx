import { Product } from '@/interface/Product';

export type ProductAction =
    | { type: 'ADD_PRODUCT'; payload: Product }
    | { type: 'REMOVE_PRODUCT'; payload: string };