<script setup lang="ts">
import { debounce } from '@/core/utils'
import { calculatorAndCounterInjectionKey } from '../../../model/calculatorAndCounter'
import { inject } from 'vue'

const DELAY_DEBOUNCE = 300
const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel
const quantity = calculatorModel?.quantity ?? 0

const onChangeInput = debounce<Event>((event: Event) => {
  calculatorModel?.changeQuantity((event.target as HTMLInputElement).value)
}, DELAY_DEBOUNCE)
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
