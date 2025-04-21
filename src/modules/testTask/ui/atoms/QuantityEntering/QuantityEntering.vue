<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '../../../model/calculatorAndCounter'
import { inject } from 'vue'

const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel
const quantity = calculatorModel?.quantity ?? 0

function onChangeInput(event: Event) {
  if (calculatorModel === undefined) return

  calculatorModel.changeQuantity((event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="container">
    <input
      type="number"
      name="amount"
      placeholder="кол-во"
      @input="onChangeInput"
      :value="quantity"
    />
    <label for="amount">{{ quantity }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
