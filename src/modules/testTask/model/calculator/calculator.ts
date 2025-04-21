import { ref } from 'vue'
import {
  calculateAmount,
  calculatePrice,
  calculateQuantity,
  getCurrentQueue,
  convertInputValueInNumber,
} from './calculatorHelpers'
import type { TQueue } from './calculatorTypes'

export function useCalculatorModel() {
  const amount = ref<number>(0)
  const price = ref<number>(0)
  const quantity = ref<number>(0)
  const queue = ref<TQueue>(['price', 'quantity', 'amount'])

  function changePrice(value: string) {
    const convertedValue = convertInputValueInNumber(value)

    if (convertedValue === null) return

    price.value = convertedValue
    queue.value = getCurrentQueue(queue.value, 'price')
    const lastImmutableField = queue.value[queue.value.length - 1]

    if (lastImmutableField === 'amount') {
      amount.value = calculateAmount({ quantity: quantity.value, price: price.value })
    }

    if (lastImmutableField === 'quantity') {
      quantity.value = calculateQuantity({ price: price.value, amount: amount.value })
    }
  }

  function changeQuantity(value: string) {
    const convertedValue = convertInputValueInNumber(value)

    if (convertedValue === null) return

    quantity.value = convertedValue
    queue.value = getCurrentQueue(queue.value, 'quantity')
    const lastImmutableField = queue.value[queue.value.length - 1]

    if (lastImmutableField === 'price') {
      price.value = calculatePrice({ quantity: quantity.value, amount: amount.value })
    }

    if (lastImmutableField === 'amount') {
      amount.value = calculateAmount({ quantity: quantity.value, price: price.value })
    }
  }

  function changeAmount(value: string) {
    const convertedValue = convertInputValueInNumber(value)

    if (convertedValue === null) return

    amount.value = convertedValue
    queue.value = getCurrentQueue(queue.value, 'amount')
    const lastImmutableField = queue.value[queue.value.length - 1]

    if (lastImmutableField === 'price') {
      price.value = calculatePrice({ quantity: quantity.value, amount: amount.value })
    }

    if (lastImmutableField === 'quantity') {
      quantity.value = calculateQuantity({ price: price.value, amount: amount.value })
    }
  }

  return { amount, price, quantity, queue, changeAmount, changePrice, changeQuantity }
}
