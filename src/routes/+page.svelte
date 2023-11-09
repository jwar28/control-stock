<script async script lang="ts">
  import { getTotalProducts, getTotalStockPrice } from '$lib/api/productApi';
  import ProductChart from '$lib/components/ui/ProductChart.svelte';
  import StatCard from '$lib/components/ui/StatCard.svelte';

  let totalProducts = 0;
  let totalStockPrice = 0;
  let formattedPrice: string;

  const currencyFormat = {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  $: {
    getTotalProducts().then((data) => {
      totalProducts = data;
    });

    getTotalStockPrice().then((data) => {
      totalStockPrice = data;
    });

    formattedPrice = totalStockPrice.toLocaleString('es-CO', currencyFormat);
  }
</script>

<div class="flex flex-col gap-5">
  <p class="text-xl">Home</p>
  <hr />
  <div class="flex justify-evenly">
    <StatCard header="Productos en stock" value={totalProducts} />
    <StatCard header="Valor total de stock" value={formattedPrice} />
  </div>
  <div>
    <ProductChart />
  </div>
</div>
