<script setup lang="ts">
import Parceiros from "../components/Parceiros.vue";
import Sobre from "../components/Sobre.vue";
</script>

<template>
  <div>
    <main class="pb-20">
      <div class="flex flex-col gap-16">
        <div class="flex flex-col justify-center items-center gap-2">
          <h2 class="font-bold text-4xl">Sobre o núcleo de finanças</h2>
          <p class="text-justify w-[700px]">
            Fundado em 2016, o Núcleo de Finanças é uma liga de mercado
            financeiro do Insper que busca aproximar os alunos à realidade do
            mercado financeiro através da entrega de projetos em duas principais
            áreas: Equity Research e Quant. Para tal, possuímos diversos
            parceiros, destacando J.P. Morgan, Bradesco BBI, XP Inc, BNP Paribas
            e MMZR Family, que fornecem capacitações visando o desenvolvimento
            pessoal de cada integrante da organização.
          </p>
        </div>
        <div class="flex justify-center items-center gap-16">
          <h2 class="font-bold text-4xl">Missão</h2>
          <p class="w-[500px] text-justify">
            Fornecer aos membros base em teoria financeira, ambiente para
            discutir e analisar movimentos fundamentais do mercado, fluência na
            geração de teses de investimento e a oportunidade de aprender com
            colegas e especialistas do Mercado Financeiro; valorizando, ao mesmo
            tempo, o desenvolvimento profissional individual.
          </p>
        </div>
        <div class="flex justify-center items-center gap-16">
          <p class="w-[500px] text-justify">
            Atingir o máximo de pessoas que manifestem o interesse pelo mundo
            financeiro, utilizando recursos internos e externos à Comunidade
            Insper.
          </p>
          <h2 class="font-bold text-4xl">Visão</h2>
        </div>
        <div class="flex justify-center items-center gap-16">
          <h2 class="font-bold text-4xl">Valores</h2>
          <p class="w-[500px] text-justify">
            Visamos uma cultura organizacional que não prioriza o nível
            hierárquico em primeiro plano, possibilitando a interação de todos
            os membros, os quais compartilham o mesmo propósito: aprender.
            Incentivamos nossos membros a extrair o melhor de si, para que
            possam evoluir como pessoa e profissionais qualificados
          </p>
        </div>
      </div>
    </main>

    <div class="">
      <parceiros />
    </div>
  </div>
</template>

<style scoped></style>
