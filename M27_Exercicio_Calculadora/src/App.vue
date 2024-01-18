<script setup>
import { reactive } from "vue";
import HeaderModule from "./components/HeaderModule.vue";
import Notification from "./components/Notification.vue";
import Results from "./components/Results.vue";
import FormModule from "./components/FormModule.vue";

const state = reactive({
  valTemp1: 0,
  valTemp2: 0,
  filter: "soma",
});

const operations = {
  soma: (a, b) => (a + b).toFixed(2),
  subtracao: (a, b) => (a - b).toFixed(2),
  multiplicacao: (a, b) => (a * b).toFixed(2),
  divisao: (a, b) => (a / b).toFixed(2),
};
</script>

<template>
  <div class="container">
    <HeaderModule />

    <Notification />

    <FormModule
      :valorForm1="(event) => (state.valTemp1 = parseFloat(event.target.value))"
      :valorForm2="(event) => (state.valTemp2 = parseFloat(event.target.value))"
      :filterState="(event) => (state.filter = event.target.value)"
    />

    <Results :results="operations[state.filter](state.valTemp1, state.valTemp2)" />
  </div>
</template>

<style scoped></style>
