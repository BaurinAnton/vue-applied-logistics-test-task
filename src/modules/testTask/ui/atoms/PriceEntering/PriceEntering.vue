<script setup lang="ts">
import { debounce } from '@/core/utils'
import { calculatorAndCounterInjectionKey } from '../../../model/calculatorAndCounter'
import { inject } from 'vue'

const DELAY_DEBOUNCE = 300
const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel
const queueEventModel = inject(calculatorAndCounterInjectionKey)?.queueEventModel

const onChangeInput = debounce<Event>((event: Event) => {
  calculatorModel?.changePrice((event.target as HTMLInputElement).value)
  queueEventModel?.setEvent('событие изменения input-ов (1)')
}, DELAY_DEBOUNCE)
</script>

<template>
  <div class="container" v-if="calculatorModel">
    <input
      type="number"
      name="price"
      placeholder="цена"
      @input="onChangeInput"
      :value="calculatorModel.price.value"
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
