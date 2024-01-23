<script setup>
const props = defineProps(["valorForm1", "valorForm2", "filterState"]);
</script>

<template>
  <div class="row">
    <form class="d-flex justify-content-center align-items-center">
      <div class="col-md-2">
        <select @change="props.filterState" name="selectOperation" class="form-select text-center">
          <option value="soma">Soma</option>
          <option value="subtracao">Substração</option>
          <option value="divisao">Divisão</option>
          <option value="multiplicacao">Multiplicação</option>
        </select>
      </div>
      <div class="col-md-3 ms-2">
        <input @keyup="props.valorForm1" class="form-control" placeholder="Valor 1" />
      </div>
      <div class="ms-2 col-md-3">
        <input @keyup="props.valorForm2" class="form-control" placeholder="Valor 2" />
      </div>
    </form>
  </div>
</template>
