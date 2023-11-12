<script lang="ts">
  import { signInWithEmailAndPassword, type Auth } from 'firebase/auth';
  import type { User } from '$lib/shared/models/user';

  export let auth: Auth;

  const user: User = {
    email: '',
    password: '',
  };

  let errorMessage = '';

  const signIn = async () =>
    await signInWithEmailAndPassword(auth, user.email, user.password).catch(
      (error) => {
        errorMessage = error.message;
      }
    );
</script>

<img src="/logo.png" alt="" class="w-[30%]" />
<form
  class="card p-4 w-[30%] flex justify-center shadow-xl h-fit"
  on:submit={() => signIn()}
>
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
    <input
      type="submit"
      value="Ingresar"
      class="btn variant-filled-secondary"
    />
    {#if errorMessage}
      <p class="text-error-500 text-center">{errorMessage}</p>
    {/if}
  </div>
</form>
