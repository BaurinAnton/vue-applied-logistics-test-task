<script setup lang="ts">
import { calculatorInjectionKey } from '../../../model/calculator'
import { inject } from 'vue'

const calculatorModel = inject(calculatorInjectionKey)
const amount = calculatorModel?.amount ?? 0

function onChangeInput(event: Event) {
  if (calculatorModel === undefined) return

  calculatorModel.changeAmount((event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="container">
    <input type="number" name="amount" placeholder="сумма" :value="amount" @input="onChangeInput" />
    <label for="amount">{{ amount }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
