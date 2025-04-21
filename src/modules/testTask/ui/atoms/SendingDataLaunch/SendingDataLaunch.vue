<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '../../../model/calculatorAndCounter'
import { inject } from 'vue'

const calculatorAndCounterModel = inject(calculatorAndCounterInjectionKey)

function onClick() {
  calculatorAndCounterModel?.setData()
}
</script>

<template>
  <div class="container">
    <button name="button" @click="onClick">Отправить</button>
    <label for="button" v-if="calculatorAndCounterModel"
      >{{ calculatorAndCounterModel.dataForLocalStorage.value }}
    </label>
  </div>
</template>

<style lang="css" scoped>
button {
  margin-bottom: 2rem;
}
</style>
