<script lang="ts">
  import { deleteProductById } from '$lib/api/productApi';
  import { firestore } from '$lib/firebase';
  import type { Product } from '$lib/types/product';
  import { type PaginationSettings, Paginator } from '@skeletonlabs/skeleton';
  import { collectionStore } from 'sveltefire';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import ProductUpdateModal from '../modals/ProductUpdateModal.svelte';

  export let productSearch: string;

  const modalStore = getModalStore();

  const productList = collectionStore<Product>(firestore, 'products');

  const getProductId = (product: any): string => product.id;

  let filteredProductList: Product[] = [];

  let paginationSettings = {
    page: 0,
    limit: 5,
    size: filteredProductList.length,
    amounts: [1, 2, 5, 6, 10],
  } satisfies PaginationSettings;

  $: {
    filteredProductList = productSearch
      ? $productList.filter((product) =>
          product.name.toLowerCase().includes(productSearch.toLowerCase())
        )
      : [...$productList];

    paginationSettings.size = filteredProductList.length;
  }

  $: paginatedSource = filteredProductList.slice(
    paginationSettings.page * paginationSettings.limit,
    paginationSettings.page * paginationSettings.limit +
      paginationSettings.limit
  );
</script>

<table class="table table-fixed table-hover overflow-hidden">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>Marca</th>
      <th>Stock</th>
      <th>Precio</th>
      <th class="w-20">#</th>
    </tr>
  </thead>
  <tbody>
    {#each paginatedSource as product}
      <tr class="group">
        <td>
          {product.name}
        </td>
        <td class="break-words">
          {product.description}
        </td>
        <td>
          {product.brand}
        </td>
        <td>
          {product.stock}
        </td>
        <td>
          {product.price}
        </td>
        <td>
          <div class="invisible group-hover:visible flex justify-around">
            <!-- Edit button -->
            <button
              on:click={() => {
                modalStore.trigger({
                  type: 'component',
                  component: {
                    ref: ProductUpdateModal,
                    props: {
                      name: product.name,
                      description: product.description,
                      brand: product.brand,
                      stock: product.stock,
                      price: product.price,
                      productId: getProductId(product),
                    },
                  },
                  title: 'Actualizar producto',
                  body: 'Ingrese los nuevos datos del producto',
                });
              }}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435"
                  stroke="#daa93e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            |
            <!-- Delete button -->
            <button
              on:click={() => {
                modalStore.trigger({
                  type: 'confirm',
                  title: 'Confirmar eliminacion',
                  body: 'Esta seguro de querer borrar este producto?',
                  buttonTextCancel: 'Cancelar',
                  buttonTextConfirm: 'Confirmar',
                  response(r) {
                    if (r) {
                      deleteProductById(getProductId(product));
                    }
                  },
                });
              }}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5H19L18 21H6L5 7.5Z"
                  stroke="#a26175"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5 9.5L15 19"
                  stroke="#a26175"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 9.5V19"
                  stroke="#a26175"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 9.5L9 19"
                  stroke="#a26175"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8"
                  stroke="#a26175"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
<div class="mt-5">
  <Paginator bind:settings={paginationSettings} showNumerals maxNumerals={1} />
</div>
