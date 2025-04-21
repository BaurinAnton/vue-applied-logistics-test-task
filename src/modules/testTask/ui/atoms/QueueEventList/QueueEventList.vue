<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '@/modules/testTask/model/calculatorAndCounter'
import { inject } from 'vue'

const queueEventModel = inject(calculatorAndCounterInjectionKey)?.queueEventModel
</script>

<template>
  <ui class="queue-event-container" v-if="queueEventModel">
    <li v-for="event in queueEventModel.queueEvent.value" :key="event">
      {{ event }}
    </li>
  </ui>
</template>
