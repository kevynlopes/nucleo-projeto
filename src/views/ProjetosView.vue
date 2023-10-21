<script>
export default {
  data() {
    return {
      openModal: false,
    };
  },
  methods: {
    abrirModal() {
      console.log("teste lucano teste...");
    },
  },
};
</script>

<template>
  <div class="pb-20">
    <div class="flex flex-col gap-8">
      <div class="pl-80">
        <h2 class="font-bold text-4xl">Áreas de atuação</h2>
        <p class="w-[1000px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          inventore magni velit necessitatibus eos iure, exercitationem vero
          aspernatur maxime voluptatibus optio ab! Quia doloremque praesentium
          quae obcaecati vitae. Repellendus, a. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem error magni laboriosam,
          consequuntur cum deleniti possimus deserunt, corrupti, asperiores
          aliquam excepturi accusantium iste voluptas laudantium quae ducimus
          quibusdam quasi totam.
        </p>
      </div>
      <div class="pl-80">
        <button
          @click="abrirModal()"
          class="font-bold text-4xl transition hover:scale-105 underline"
        >
          Equity Research
        </button>
        <p class="w-[1000px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          tempora ducimus qui soluta quae quisquam exercitationem odio porro
          neque aut cumque, saepe, culpa reiciendis nihil sit pariatur tempore!
          Pariatur, qui. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Amet, consequuntur est molestiae quidem unde quia ipsa placeat
          omnis natus quo mollitia eius, tempora inventore atque facilis, porro
          aliquid numquam rem.
        </p>
      </div>

      <div class="pl-80">
        <button class="font-bold text-4xl transition hover:scale-105 underline">
          Quant
        </button>
        <p class="w-[1000px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          tempora ducimus qui soluta quae quisquam exercitationem odio porro
          neque aut cumque, saepe, culpa reiciendis nihil sit pariatur tempore!
          Pariatur, qui. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Amet, consequuntur est molestiae quidem unde quia ipsa placeat
          omnis natus quo mollitia eius, tempora inventore atque facilis, porro
          aliquid numquam rem.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
