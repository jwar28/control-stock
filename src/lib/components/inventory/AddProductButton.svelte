<script lang="ts">
  import type { ModalSettings } from '@skeletonlabs/skeleton';
  import { getModalStore } from '@skeletonlabs/skeleton';

  const modalStore = getModalStore();
  const modal: ModalSettings = {
    type: 'component',
    component: 'productFormModal',
    title: 'Crear producto',
    body: 'Formulario de registro de producto',
  };
</script>

<button
  type="button"
  class="btn variant-filled-success"
  on:click={() => modalStore.trigger(modal)}
>
  <span>
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6V18"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 12H18"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
  <span>Agregar producto</span>
</button>
