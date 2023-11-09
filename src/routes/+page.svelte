<script async script lang="ts">
  import {
    getProductStockCount,
    getProductsCount,
    getTotalStockPrice,
  } from '$lib/api/productApi';
  import ProductChart from '$lib/components/ui/ProductChart.svelte';
  import StatCard from '$lib/components/ui/StatCard.svelte';

  let productsCount = 0;
  let totalStockPrice = 0;
  let productStockCount = 0;
  let formattedPrice: string;

  const currencyFormat = {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  $: {
    getProductsCount().then((data) => {
      productsCount = data;
    });

    getTotalStockPrice().then((data) => {
      totalStockPrice = data;
    });

    getProductStockCount().then((data) => {
      productStockCount = data;
    });

    formattedPrice = totalStockPrice.toLocaleString('es-CO', currencyFormat);
  }
</script>

<div class="flex flex-col gap-5">
  <p class="text-xl">Home</p>
  <hr />
  <div class="flex justify-evenly">
    <StatCard header="Productos en inventario" value={productsCount} />
    <StatCard header="Valor total del inventario" value={formattedPrice} />
    <StatCard header="Stock total de productos" value={productStockCount} />
  </div>
  <div>
    <ProductChart />
  </div>
</div>
