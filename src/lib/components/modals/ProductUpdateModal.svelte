<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import type { Product } from '$lib/types/product';
  import { updateProductById } from '$lib/api/productApi';
  import ModalFormLayout from './ModalFormLayout.svelte';

  export let parent: SvelteComponent;
  export let name = '';
  export let description = '';
  export let price = 0;
  export let stock = 0;
  export let brand = '';
  export let productId: string;

  const modalStore = getModalStore();

  const productData: Product = {
    name,
    description,
    price,
    stock,
    brand,
  };

  const onFormSubmit = async () => {
    if ($modalStore[0].response) $modalStore[0].response(productData);
    updateProductById(productId, productData);
    modalStore.close();
  };
</script>

<ModalFormLayout {parent} {productData} {onFormSubmit} />
