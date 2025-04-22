<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '../../../../model/calculatorAndCounter'
import { inject } from 'vue'

const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel

function onChangeInput (event: Event) {
  calculatorModel?.changeAmount((event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="container" v-if="calculatorModel">
    <input
      type="number"
      name="amount"
      placeholder="сумма"
      :value="calculatorModel.amount.value"
      @input="onChangeInput"
    />
    <label for="amount">{{ calculatorModel.amount.value }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
