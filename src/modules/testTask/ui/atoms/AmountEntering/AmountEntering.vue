<script setup lang="ts">
import { useCalculatorModel } from '../../../model/calculator'

const calculatorModel = useCalculatorModel()

function onChangeInput(event: Event) {
  calculatorModel.changeAmount((event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="container">
    <input
      type="number"
      name="amount"
      placeholder="сумма"
      :value="calculatorModel.amount"
      @input="onChangeInput"
    />
    <label for="amount">{{ calculatorModel.amount }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
