<script lang="ts">
  export let header: string;
  export let value: any;
</script>

<div class="card w-fit h-fit">
  <header class="card-header text-center text-lg">{header}</header>
  <section class="p-4 text-center text-xl">{value}</section>
</div>
