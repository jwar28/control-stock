<script lang="ts">
  import '../app.postcss';
  import { AppShell } from '@skeletonlabs/skeleton';
  import { FirebaseApp, SignedOut } from 'sveltefire';
  import { initializeApp } from 'firebase/app';
  import { getFirestore } from 'firebase/firestore';
  import { getAuth } from 'firebase/auth';
  import { firebaseConfig } from '$lib/config/firebase';
  import { SignedIn } from 'sveltefire';

  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';
  import SignInForm from '$lib/components/SignInForm.svelte';
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);
</script>

<!-- App Shell -->
<FirebaseApp {auth} {firestore}>
  <SignedIn
    ><AppShell>
      <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
      <!-- Router Slot -->
      <slot />
      <svelte:fragment slot="footer">Footer</svelte:fragment>
    </AppShell>
  </SignedIn>
  <SignedOut let:auth>
    <div class="w-full h-screen flex justify-center items-center">
      <SignInForm {auth} />
    </div>
  </SignedOut>
</FirebaseApp>
