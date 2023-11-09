<script lang="ts">
  import {
    BarChartSimple,
    ChartTheme,
    ScaleTypes,
  } from '@carbon/charts-svelte';
  import { collectionStore } from 'sveltefire';
  import { firestore } from '$lib/firebase';
  import type { Product } from '$lib/types/product';

  const productList = collectionStore<Product>(firestore, 'products');

  $: data = $productList.map((product) => {
    return {
      group: product.name,
      value: product.stock,
    };
  });
</script>

<BarChartSimple
  {data}
  options={{
    theme: ChartTheme.G90,
    title: 'Productos en stock',
    height: '340px',
    axes: {
      left: { mapsTo: 'value' },
      bottom: { mapsTo: 'group', scaleType: ScaleTypes.LABELS },
    },
  }}
/>
