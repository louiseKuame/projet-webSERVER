<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex flex-column justify-content-center flex-grow-1"> 
    <div class="header">
    <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <nav>
        <RouterLink to="/">Liste des departements</RouterLink>
        <RouterLink to="/utilisateurs">Liste des utilisateurs</RouterLink>
      </nav>
  </header>
  </div>
 
  <div class="donnee">
    <RouterView />
  </div>
  </div>
  
 
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.d-flex{
  max-width: 100%;
  width: 100%;
}

.header,.donnee{
  width: 100%;
  max-width: 100%;
  margin-top: 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
