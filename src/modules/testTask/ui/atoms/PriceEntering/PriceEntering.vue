<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '../../../model/calculatorAndCounter'
import { inject } from 'vue'

const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel
const price = calculatorModel?.price ?? 0

function onChangeInput(event: Event) {
  if (calculatorModel === undefined) return

  calculatorModel.changePrice((event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="container">
    <input type="number" name="price" placeholder="цена" @input="onChangeInput" :value="price" />
    <label for="price">{{ price }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
