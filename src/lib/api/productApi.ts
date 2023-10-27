import { firestore } from '$lib/firebase';
import type { Product } from '$lib/types/product';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
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
