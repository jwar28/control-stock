<script lang="ts">
  export let header: string;
  export let value: any;
</script>

<div class="card variant-ghost w-fit h-fit shadow-sm">
  <header class="card-header text-center text-xl">{header}</header>
  <section class="p-4 text-center text-2xl">{value}</section>
</div>
