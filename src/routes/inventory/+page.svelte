<script lang="ts">
  import ProductTable from '$lib/components/inventory/ProductTable.svelte';
  import Searchbar from '$lib/components/ui/Searchbar.svelte';

  let productSearch = '';
</script>

<div class="flex flex-col gap-5 h-full">
  <!-- Searchbar -->
  <div class="mt-0.5">
    <Searchbar
      bind:searchString={productSearch}
      placeholder="Buscar producto"
    />
  </div>
  <!-- Table -->
  <div>
    <ProductTable {productSearch} />
  </div>
</div>
