<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { getModalStore } from '@skeletonlabs/skeleton';
  import type { Product } from '$lib/types/product';

  export let parent: SvelteComponent;

  const modalStore = getModalStore();

  const productData: Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0,
    brand: '',
  };

  async function onFormSubmit() {
    if ($modalStore[0].response) $modalStore[0].response(productData);
    modalStore.close();
  }

  const cBase = 'card p-4 w-modal shadow-xl space-y-4';
  const cHeader = 'text-2xl font-bold';
  const cForm =
    'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
  <div class="modal-example-form {cBase}">
    <header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
    <article>{$modalStore[0].body ?? '(body missing)'}</article>
    <form class="modal-form {cForm}">
      <div class="flex gap-5">
        <label class="label w-[50%]">
          <span>Nombre</span>
          <input
            class="input"
            type="text"
            bind:value={productData.name}
            placeholder="Nombre del producto..."
          />
        </label>
        <label class="label w-[50%]">
          <span>Descripcion</span>
          <input
            class="input"
            type="text"
            bind:value={productData.description}
            placeholder="Descripcion del producto..."
          />
        </label>
      </div>

      <div class="flex gap-5">
        <label class="label w-[50%]">
          <span>Precio</span>
          <input
            class="input"
            type="number"
            bind:value={productData.price}
            placeholder="Ingrese el precio del producto..."
          />
        </label>
        <label class="label w-[50%]">
          <span>Stock</span>
          <input
            class="input"
            type="number"
            bind:value={productData.stock}
            placeholder="Ingrese el stock del producto..."
          />
        </label>
      </div>

      <label class="label">
        <span>Marca</span>
        <input
          class="input"
          type="text"
          bind:value={productData.brand}
          placeholder="Marca del producto..."
        />
      </label>
    </form>
    <!-- prettier-ignore -->
    <footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancelar</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Crear producto</button>
    </footer>
  </div>
{/if}
