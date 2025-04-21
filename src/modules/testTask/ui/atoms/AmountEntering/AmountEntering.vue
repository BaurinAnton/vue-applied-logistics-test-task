<script setup lang="ts">
import { debounce } from '@/core/utils'
import { calculatorAndCounterInjectionKey } from '../../../model/calculatorAndCounter'
import { inject } from 'vue'

const DELAY_DEBOUNCE = 300
const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel
const amount = calculatorModel?.amount ?? 0

const onChangeInput = debounce<Event>((event: Event) => {
  calculatorModel?.changeAmount((event.target as HTMLInputElement).value)
}, DELAY_DEBOUNCE)
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
