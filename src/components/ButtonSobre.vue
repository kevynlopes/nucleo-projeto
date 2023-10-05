<template>
  <button class="bg-black transition hover:scale-105">
    <p class="text-white p-4">{{ title }}</p>
  </button>
</template>

<script>
export default {
  name: "ButtonSobre",
  props: {
    title: String,
  },
};
</script>

<style></style>
