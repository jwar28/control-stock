<script lang="ts">
  import '../app.postcss';
  import {
    AppShell,
    Modal,
    initializeStores,
    type ModalComponent,
  } from '@skeletonlabs/skeleton';
  import { FirebaseApp, SignedOut } from 'sveltefire';
  import { initializeApp } from 'firebase/app';
  import { getFirestore } from 'firebase/firestore';
  import { getAuth } from 'firebase/auth';
  import { firebaseConfig } from '$lib/config/firebase';
  import { SignedIn } from 'sveltefire';
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  import SignInForm from '$lib/components/auth/SignInForm.svelte';
  import AppRail from '$lib/components/ui/AppRail.svelte';
  import ProductFormModal from '$lib/components/modals/ProductFormModal.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
  initializeStores();
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  const modalRegistry: Record<string, ModalComponent> = {
    productFormModal: { ref: ProductFormModal },
  };
</script>

<svelte:head>
  <title>Control Stock</title>
  <meta
    title="Control stock"
    name="description"
    content="Tu inventario en un solo lugar"
    lang="es"
  />
  <meta />
</svelte:head>

<Modal components={modalRegistry} />

<!-- App Shell -->
<FirebaseApp {auth} {firestore}>
  <SignedIn>
    <AppShell>
      <!-- Sidebar -->
      <svelte:fragment slot="sidebarLeft">
        <AppRail />
      </svelte:fragment>
      <!-- Content -->
      <div class="m-5">
        <slot />
      </div>
      <!-- Footer -->
      <svelte:fragment slot="pageFooter">
        <hr />
        <Footer />
      </svelte:fragment>
    </AppShell>
  </SignedIn>
  <SignedOut let:auth>
    <div class="w-full h-screen flex justify-center items-center">
      <SignInForm {auth} />
    </div>
  </SignedOut>
</FirebaseApp>
