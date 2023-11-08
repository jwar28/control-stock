import { firestore } from '$lib/firebase';
import type { Product } from '$lib/types/product';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
} from 'firebase/firestore';

export const createProduct = async (productData: Product) =>
  await addDoc(collection(firestore, 'products'), productData);

export const deleteProductById = async (productId: string) =>
  await deleteDoc(doc(firestore, 'products', productId));

export const updateProductById = async (
  productId: string,
  productData: Product
) => {
  const productRef = doc(firestore, 'products', productId);
  await updateDoc(productRef, productData);
};

export const getTotalProducts = async () => {
  const products = await getDocs(collection(firestore, 'products'));
  return products.size;
};

export const getTotalStockPrice = async () => {
  const products = await getDocs(collection(firestore, 'products'));
  let total = 0;
  products.forEach((product) => {
    total += product.data().stock * product.data().price;
  });
  return total;
};
