<script setup>
const props = defineProps(["results"]);
</script>

<template>
  <div class="row mt-5 justify-content-center">
    <p class="text-center fs-4 fw-bold bg-success rounded-3 p-2" style="width: 35%" v-if="props.results >= 0">
      Resultado: {{ props.results }}
    </p>
    <p class="text-center fs-4 fw-bold bg-danger rounded-3 p-2" style="width: 35%" v-else="props.results < 0">
      Resultado: {{ props.results }}
    </p>
  </div>
</template>
