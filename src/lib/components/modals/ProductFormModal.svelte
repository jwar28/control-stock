<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import type { Product } from '$lib/shared/models/product';
  import { createProduct } from '$lib/shared/services/productService';
  import ModalFormLayout from './ModalFormLayout.svelte';

  export let parent: SvelteComponent;

  const modalStore = getModalStore();

  const productData: Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    brand: '',
  };

  const onFormSubmit = async () => {
    if ($modalStore[0].response) $modalStore[0].response(productData);
    createProduct(productData);
    modalStore.close();
  };
</script>

<ModalFormLayout {parent} {productData} {onFormSubmit} />
