<script setup lang="ts">
import { provide } from 'vue'
import {
  useCalculatorAndCounterModel,
  calculatorAndCounterInjectionKey,
} from '../../../../model/calculatorAndCounter'
import { AmountEntering } from '../../atoms/AmountEntering'
import { PriceEntering } from '../../atoms/PriceEntering'
import { QuantityEntering } from '../../atoms/QuantityEntering'
import { SendingDataLaunch } from '../../atoms/SendingDataLaunch'
import { QueueEventList } from '../../atoms/QueueEventList'
import { MonotonouslyIncreasingNumber } from '../../atoms/MonotonouslyIncreasingNumber'

provide(calculatorAndCounterInjectionKey, useCalculatorAndCounterModel())
</script>

<template>
  <div class="entering-data-container">
    <PriceEntering />
    <QuantityEntering />
    <AmountEntering />
    <SendingDataLaunch />
  </div>
  <MonotonouslyIncreasingNumber />
  <QueueEventList />
</template>

<style lang="css" scoped>
.entering-data-container {
  display: flex;
  gap: 2rem;
}
</style>
