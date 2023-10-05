<script setup lang="ts">
import Parceiros from "../components/Parceiros.vue";
import Sobre from "../components/Sobre.vue";
</script>

<template>
  <div>
    <main class="pb-20">
      <div class="flex justify-center items-center">
        <div>
          <img class="image rounded-l-md" src="../assets/images/notebook.png" />
        </div>
        <div class="bg-gray-300 p-52 shadow-2xl rounded">
          <h1>Núcleo de finanças</h1>
        </div>
      </div>
    </main>
    <div>
      <sobre />
    </div>
    <div class="">
      <parceiros />
    </div>
  </div>
</template>

<style scoped></style>
