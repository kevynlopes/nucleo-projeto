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
    <footer class="flex flex-col gap-8 pt-32 p-32 bg-black text-white">
      <div class="flex justify-center items-center gap-20">
        <div>
          <h3 class="font-bold text-2xl">ONDE ESTAMOS</h3>
          <p>Rua Quatá 200, 1º andar</p>
          <p>Vila Olimpia, São Paulo/SP, CEP 04546-042</p>
        </div>
        <div>
          <h3 class="font-bold text-2xl">Dúvidas</h3>
          <p>email@hotmail.com</p>
        </div>
        <div>
          <h3 class="font-bold text-2xl">Conecte-se</h3>
          <p>icon</p>
        </div>
      </div>
      <div class="flex justify-center">
        <p>© 2023 | Todos direitos reservados ao Núcleo de Finanças.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.logo {
  height: 100px;
  width: 80px;
}
</style>
