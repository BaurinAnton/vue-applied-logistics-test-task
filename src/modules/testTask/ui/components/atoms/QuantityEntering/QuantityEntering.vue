<script setup lang="ts">
import { debounce } from '@/core/utils'
import { calculatorAndCounterInjectionKey } from '../../../../model/calculatorAndCounter'
import { inject } from 'vue'
import { DELAY_DEBOUNCE } from '../../../constants'

const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel
const queueEventModel = inject(calculatorAndCounterInjectionKey)?.queueEventModel

const onChangeInput = debounce<Event>((event: Event) => {
  calculatorModel?.changeQuantity((event.target as HTMLInputElement).value)
  queueEventModel?.setEvent('событие изменения input-ов (2)')
}, DELAY_DEBOUNCE)
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
