<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '../../../../model/calculatorAndCounter'
import { inject } from 'vue'

const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel

function onChangeInput (event: Event) {
  calculatorModel?.onQuantityChange((event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="container" v-if="calculatorModel">
    <input
      type="number"
      name="amount"
      placeholder="кол-во"
      @input="onChangeInput"
      :value="calculatorModel.quantity.value"
    />
    <label for="amount">{{ calculatorModel.quantity.value }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
