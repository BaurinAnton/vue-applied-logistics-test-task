import { ref } from 'vue'
import {
  calculateAmount,
  calculatePrice,
  calculateQuantity,
  getCurrentQueue,
  convertInputValueInNumber,
} from './calculatorHelpers'
import type { TQueue, TQueueEventModel } from './calculatorTypes'
import { DEFAULT_QUEUE } from './calculatorConstants'
import { debounce } from '@/core/utils'

export function useCalculatorModel(queueEventModel: TQueueEventModel) {
  const amount = ref<number>(0)
  const price = ref<number>(0)
  const quantity = ref<number>(0)
  const queue = ref<TQueue>(DEFAULT_QUEUE as TQueue)

  const changePrice = debounce<string>((value: string) => {
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

    queueEventModel.setEvent('событие изменения input-ов (1)')
  }, 300)

  const changeQuantity = debounce<string>((value: string) => {
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

    queueEventModel.setEvent('событие изменения input-ов (2)')
  }, 300)

  const changeAmount = debounce<string>((value: string) => {
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

    queueEventModel.setEvent('событие изменения input-ов (3)')
  }, 300)

  return { amount, price, quantity, changeAmount, changePrice, changeQuantity }
}
