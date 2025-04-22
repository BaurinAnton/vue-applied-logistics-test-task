<script setup lang="ts">
import { inject } from 'vue'
import { calculatorAndCounterInjectionKey } from '../../../../model/calculatorAndCounter'

const queueEventModel = inject(calculatorAndCounterInjectionKey)?.queueEventModel
</script>

<template>
  <ul v-if="queueEventModel">
    <li v-for="event in queueEventModel.queueEvent.value" :key="event.id">
      {{ event.value }}
    </li>
  </ul>
</template>
