<script setup lang="ts">
import { debounce } from '@/core/utils'
import { calculatorAndCounterInjectionKey } from '../../../model/calculatorAndCounter'
import { inject } from 'vue'

const DELAY_DEBOUNCE = 300
const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel
const price = calculatorModel?.price ?? 0

const onChangeInput = debounce<Event>((event: Event) => {
  calculatorModel?.changePrice((event.target as HTMLInputElement).value)
}, DELAY_DEBOUNCE)
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
