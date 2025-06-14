import { ProductContext } from '@/context/ProductContext';
import productReducer from '@/reducers/productReducer';
import { Slot, Stack } from 'expo-router';
import React, { useReducer } from 'react';
import {
  StyleSheet
} from 'react-native';

export default function RootLayout() {
  const [products, productDispatch] = useReducer(productReducer, []); // Thêm state và dispatch cho products

  return (
    <ProductContext.Provider value={{ products, dispatch: productDispatch }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Product Manager",
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="product/[id]"
          options={{ title: 'Product Detail', headerTitleAlign: 'center' }}
        />
        <Slot />
      </Stack>
    </ProductContext.Provider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    margin: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    color: '#555',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    color: '#333',

  },
  gradientButton: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  gradient: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: '#2a9d8f',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  listTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  listContent: {
    padding: 10,
  },
  userItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    margin: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  userActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: '#007bff',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
  noUsersText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    margin: 10,
    marginHorizontal: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 18,
    color: '#333',
  },
  detailActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  totalContainer: {
    backgroundColor: '#2a9d8f',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
