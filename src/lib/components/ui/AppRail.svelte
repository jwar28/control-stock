<script lang="ts">
  import { page } from '$app/stores';
  import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
  import { SignedIn } from 'sveltefire';

  const fillColors = {
    home: 'white',
    inventory: 'white',
  };

  $: {
    switch ($page.url.pathname) {
      case '/':
        fillColors.home = 'black';
        fillColors.inventory = 'white';
        break;
      case '/inventory':
        fillColors.inventory = 'black';
        fillColors.home = 'white';
        break;
    }
  }
</script>

<SignedIn let:signOut>
  <AppRail width="w-24">
    <!-- Logo -->
    <svelte:fragment slot="lead">
      <AppRailAnchor href="/"><img src="/logo.png" alt="" /></AppRailAnchor>
    </svelte:fragment>

    <!-- Home -->
    <AppRailAnchor href="/" selected={$page.url.pathname === '/'} title="home">
      <svelte:fragment slot="lead">
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21"
            stroke={fillColors.home}
            stroke-linejoin="round"
          />
        </svg>
      </svelte:fragment>
      <span>Inicio</span>
    </AppRailAnchor>

    <!-- Inventory -->
    <AppRailAnchor
      href="/inventory"
      selected={$page.url.pathname === '/inventory'}
      title="inventory"
    >
      <svelte:fragment slot="lead">
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
            stroke={fillColors.inventory}
            stroke-linejoin="round"
          />
          <path
            d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
            stroke={fillColors.inventory}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="10"
            cy="20"
            r="1"
            stroke={fillColors.inventory}
            stroke-linejoin="round"
          />
          <circle
            cx="17.5"
            cy="20"
            r="1"
            stroke={fillColors.inventory}
            stroke-linejoin="round"
          />
        </svg>
      </svelte:fragment>
      <span>Inventario</span>
    </AppRailAnchor>

    <!-- Logout -->
    <AppRailAnchor slot="trail" title="logout" on:click={signOut}>
      <svelte:fragment slot="lead">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 12L6 12M6 12L11 17M6 12L11 7"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svelte:fragment>
      <span>Salir</span>
    </AppRailAnchor>
  </AppRail>
</SignedIn>
