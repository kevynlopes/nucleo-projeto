<script setup></script>

<template>
  <div id="app">
    <header>
      <div class="flex justify-center items-center">
        <img class="logo" src="./assets/images/logo.png" alt="logo" />
        <nav class="flex gap-20 p-20 text-blue-950 font-semibold">
          <router-link to="/">HOME</router-link>
          <router-link to="/projetos">PROJETOS</router-link>
          <router-link to="/cursos">CURSOS</router-link>
          <router-link to="/processo-seletivo">PROCESSO SELETIVO</router-link>
          <router-link to="/portfolio">PORTFÓLIO</router-link>
          <router-link to="/membros">MEMBROS</router-link>
          <router-link to="/contato">CONTATO</router-link>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 100px;
  width: 80px;
}
</style>
