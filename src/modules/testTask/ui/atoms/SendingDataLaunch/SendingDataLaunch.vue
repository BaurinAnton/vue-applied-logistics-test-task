<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '../../../model/calculatorAndCounter'
import { inject } from 'vue'

const calculatorAndCounterModel = inject(calculatorAndCounterInjectionKey)
const labelValue = calculatorAndCounterModel?.calculatorAndCounterDataForLocalStorage ?? ''

function onClick() {
  if (calculatorAndCounterModel === undefined) return
  calculatorAndCounterModel.setData()
}
</script>

<template>
  <div class="container">
    <button name="button" @click="onClick">Отправить</button>
    <label for="button">{{ labelValue }}</label>
  </div>
</template>

<style lang="css" scoped>
button {
  margin-bottom: 2rem;
}
</style>
