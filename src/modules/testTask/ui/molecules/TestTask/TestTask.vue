<script setup lang="ts">
import { computed, provide } from 'vue'
import {
  useCalculatorAndCounterModel,
  calculatorAndCounterInjectionKey,
} from '../../../model/calculatorAndCounter'
import { AmountEntering } from '../../atoms/AmountEntering'
import { PriceEntering } from '../../atoms/PriceEntering'
import { QuantityEntering } from '../../atoms/QuantityEntering'
import { SendingDataLaunch } from '../../atoms/SendingDataLaunch'
import { QueueEventList } from '../../atoms/QueueEventList'

const calculatorAndCounterModel = useCalculatorAndCounterModel()
const counter = computed(() => calculatorAndCounterModel.counterModel.counter.value)
provide(calculatorAndCounterInjectionKey, calculatorAndCounterModel)
</script>

<template>
  <div class="entering-data-container">
    <PriceEntering />
    <QuantityEntering />
    <AmountEntering />
    <SendingDataLaunch />
  </div>
  <div>Count: {{ counter }} - монотонно возрастающее число</div>
  <QueueEventList />
</template>

<style lang="css" scoped>
.entering-data-container {
  display: flex;
  gap: 2rem;
}
</style>
