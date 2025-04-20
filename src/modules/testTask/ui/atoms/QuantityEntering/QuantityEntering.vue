<script setup lang="ts">
import { useCalculatorModel } from '../../../model/calculator'

const calculatorModel = useCalculatorModel()

function onChangeInput(event: Event) {
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
      :value="calculatorModel.quantity"
    />
    <label for="amount">{{ calculatorModel.quantity }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
