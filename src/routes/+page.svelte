<script>
  import SignInForm from '$lib/components/SignInForm.svelte';
  import { Collection, SignedIn, SignedOut } from 'sveltefire';
</script>

<Collection ref="products" let:data={products}>
  {#each products as product}
    <h2>{product.name}</h2>
    <p>{product.description}</p>
  {/each}
</Collection>

<SignedIn let:signOut>
  <button class="btn variant-filled" on:click={signOut}>Sign Out</button>
</SignedIn>
