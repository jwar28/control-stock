<script lang="ts">
  import { Collection } from 'sveltefire';
</script>

<Collection ref="products" let:data={products}>
  {#each products as product}
    <h2>{product.name}</h2>
    <p>{product.description}</p>
  {/each}
</Collection>
