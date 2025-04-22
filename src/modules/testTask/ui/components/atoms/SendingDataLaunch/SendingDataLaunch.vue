<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '../../../../model/calculatorAndCounter'
import { inject } from 'vue'

const localStorageModel = inject(calculatorAndCounterInjectionKey)?.localStorageModel

function onClick() {
  localStorageModel?.setDataForLocalStorage()
}
</script>

<template>
  <div class="container">
    <button name="button" @click="onClick">Отправить</button>
    <label for="button" v-if="localStorageModel"
      >{{ localStorageModel.dataForLocalStorage.value }}
    </label>
  </div>
</template>

<style lang="css" scoped>
button {
  margin-bottom: 2rem;
}
</style>
