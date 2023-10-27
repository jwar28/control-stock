<script lang="ts">
  import AddProductButton from './../../lib/components/inventory/AddProductButton.svelte';
  import ProductTable from '$lib/components/inventory/ProductTable.svelte';
  import Searchbar from '$lib/components/ui/Searchbar.svelte';

  let productSearch = '';
</script>

<div class="flex flex-col gap-5 h-full">
  <!-- Searchbar -->
  <div class="mt-0.5 flex w-full justify-between">
    <Searchbar
      bind:searchString={productSearch}
      placeholder="Buscar producto..."
    />
    <span class="self-center"><AddProductButton /></span>
  </div>
  <!-- Table -->
  <div>
    <ProductTable {productSearch} />
  </div>
</div>
