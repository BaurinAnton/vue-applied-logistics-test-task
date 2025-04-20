<script setup lang="ts">
import { AmountEntering } from '../../atoms/AmountEntering'
import { PriceEntering } from '../../atoms/PriceEntering'
import { QuantityEntering } from '../../atoms/QuantityEntering'
import { SendingDataLaunch } from '../../atoms/SendingDataLaunch'
</script>

<template>
  <div class="entering-data-container">
    <PriceEntering />
    <QuantityEntering />
    <AmountEntering />
    <SendingDataLaunch />
  </div>
</template>

<style lang="css" scoped>
.entering-data-container {
  display: flex;
  gap: 2rem;
}
</style>
