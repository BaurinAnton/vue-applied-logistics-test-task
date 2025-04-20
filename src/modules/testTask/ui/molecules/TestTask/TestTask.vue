<script setup lang="ts">
import { provide } from 'vue'
import { useCalculatorModel, calculatorInjectionKey } from '../../../model/calculator'
import { useCounterModel } from '../../../model/counter'
import { AmountEntering } from '../../atoms/AmountEntering'
import { PriceEntering } from '../../atoms/PriceEntering'
import { QuantityEntering } from '../../atoms/QuantityEntering'
import { SendingDataLaunch } from '../../atoms/SendingDataLaunch'

provide(calculatorInjectionKey, useCalculatorModel())
const counterModel = useCounterModel()
</script>

<template>
  <div class="entering-data-container">
    <PriceEntering />
    <QuantityEntering />
    <AmountEntering />
    <SendingDataLaunch />
  </div>
  <div>Count: {{ counterModel.counter }}</div>
</template>

<style lang="css" scoped>
.entering-data-container {
  display: flex;
  gap: 2rem;
}
</style>
