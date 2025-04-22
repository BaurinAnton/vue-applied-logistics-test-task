<script setup lang="ts">
import { calculatorAndCounterInjectionKey } from '../../../../model/calculatorAndCounter'
import { inject } from 'vue'

const calculatorModel = inject(calculatorAndCounterInjectionKey)?.calculatorModel

function onChangeInput (event: Event)  {
  calculatorModel?.onPriceChange((event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="container" v-if="calculatorModel">
    <input
      type="number"
      name="price"
      placeholder="цена"
      @input="onChangeInput"
      :value="calculatorModel.price.value"
    />
    <label for="price">{{ calculatorModel.price }}</label>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
</style>
