<script setup lang="ts">
import { useCalculatorModel } from '../../../model/calculator'

const calculatorModel = useCalculatorModel()

function onChangeInput(event: Event) {
  calculatorModel.changePrice((event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="container">
    <input
      type="number"
      name="price"
      placeholder="цена"
      @input="onChangeInput"
      :value="calculatorModel.price"
    />
    <label for="price">{{ calculatorModel.price }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
