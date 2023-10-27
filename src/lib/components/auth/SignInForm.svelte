<script lang="ts">
  import { signInWithEmailAndPassword, type Auth } from 'firebase/auth';
  import type { User } from '$lib/types/user';

  const user: User = {
    email: '',
    password: '',
  };

  let errorMessage = '';

  export let auth: Auth;
</script>

<img src="/logo.png" alt="" class="w-[30%]" />
<div class="card p-4 w-[30%] flex justify-center shadow-xl h-fit">
  <div class="w-[90%] flex flex-col gap-8">
    <p class="text-3xl text-center font-semibold">Iniciar sesión</p>
    <label class="label">
      <span>Correo electronico</span>
      <input
        class="input"
        type="email"
        placeholder="john@example.com"
        autocomplete="email"
        bind:value={user.email}
      />
    </label>
    <label class="label">
      <span>Contraseña</span>
      <input
        class="input"
        type="password"
        placeholder="password"
        bind:value={user.password}
      />
    </label>
    <button
      type="button"
      class="btn variant-filled-secondary"
      on:click={() =>
        signInWithEmailAndPassword(auth, user.email, user.password).catch(
          (error) => {
            errorMessage = error.message;
          }
        )}>Ingresar</button
    >
    {#if errorMessage}
      <p class="text-error-500 text-center">{errorMessage}</p>
    {/if}
  </div>
</div>
