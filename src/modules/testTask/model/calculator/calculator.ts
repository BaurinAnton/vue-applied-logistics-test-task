import { ref } from 'vue'
import {
  calculateAmount,
  calculatePrice,
  calculateQuantity,
  getCurrentQueue,
  convertInputValueInNumber,
} from './calculatorHelpers'
import type { TQueue, TQueueEventModel } from './calculatorTypes'
import { DEFAULT_QUEUE, DELAY_DEBOUNCE } from './calculatorConstants'
import { debounce } from '@/core/utils'

export function useCalculatorModel(queueEventModel: TQueueEventModel) {
  const amount = ref<number>(0)
  const price = ref<number>(0)
  const quantity = ref<number>(0)
  const queue = ref<TQueue>(DEFAULT_QUEUE as TQueue)

  const onPriceChange = debounce<string>((value: string) => {
    changePrice(value)
    queueEventModel.setEvent('событие изменения input-ов (1)')
  }, DELAY_DEBOUNCE)

  const onQuantityChange = debounce<string>((value) => {
    changeQuantity(value)
    queueEventModel.setEvent('событие изменения input-ов (1)')
  }, DELAY_DEBOUNCE)

  const onAmountChange = debounce<string>((value) => {
    changeAmount(value)
    queueEventModel.setEvent('событие изменения input-ов (3)')
  }, DELAY_DEBOUNCE)

  function changePrice(value: string) {
    const convertedValue = convertInputValueInNumber(value)

    if (convertedValue === null) return

    price.value = convertedValue
    queue.value = getCurrentQueue(queue.value, 'price')
    const lastImmutableField = queue.value[queue.value.length - 1]
    changeReactiveFields(lastImmutableField)
  }

  function changeQuantity(value: string) {
    const convertedValue = convertInputValueInNumber(value)

    if (convertedValue === null) return

    quantity.value = convertedValue
    queue.value = getCurrentQueue(queue.value, 'quantity')
    const lastImmutableField = queue.value[queue.value.length - 1]
    changeReactiveFields(lastImmutableField)
  }

  function changeAmount(value: string) {
    const convertedValue = convertInputValueInNumber(value)

    if (convertedValue === null) return

    amount.value = convertedValue
    queue.value = getCurrentQueue(queue.value, 'amount')
    const lastImmutableField = queue.value[queue.value.length - 1]
    changeReactiveFields(lastImmutableField)
  }

  function changeReactiveFields(lastImmutableField: string) {
    if (lastImmutableField === 'price') {
      price.value = calculatePrice({ quantity: quantity.value, amount: amount.value })
    }

    if (lastImmutableField === 'quantity') {
      quantity.value = calculateQuantity({ price: price.value, amount: amount.value })
    }

    if (lastImmutableField === 'amount') {
      amount.value = calculateAmount({ quantity: quantity.value, price: price.value })
    }
  }

  return { amount, price, quantity, onPriceChange, onQuantityChange, onAmountChange }
}
