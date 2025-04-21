<script setup lang="ts">
import { inject } from 'vue'
import { calculatorAndCounterInjectionKey } from '../../../../model/calculatorAndCounter'

const queueEventModel = inject(calculatorAndCounterInjectionKey)?.queueEventModel
</script>

<template>
  <ui class="queue-event-container" v-if="queueEventModel">
    <li v-for="event in queueEventModel.queueEvent.value" :key="event">
      {{ event }}
    </li>
  </ui>
</template>
