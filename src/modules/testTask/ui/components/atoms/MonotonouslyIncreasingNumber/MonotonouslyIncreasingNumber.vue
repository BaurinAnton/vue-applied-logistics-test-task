<script setup lang="ts">
import { inject } from 'vue'
import { calculatorAndCounterInjectionKey } from '../../../../model/calculatorAndCounter'

const counterModel = inject(calculatorAndCounterInjectionKey)?.counterModel
</script>

<template>
  <p v-if="counterModel">Count: {{ counterModel.counter.value }} - монотонно возрастающее число</p>
</template>
