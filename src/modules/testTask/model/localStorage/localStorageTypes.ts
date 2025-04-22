import type { Ref } from 'vue'

export type TCalculatorModel = {
  amount: Ref<number, number>
  price: Ref<number, number>
  quantity: Ref<number, number>
  onPriceChange: (data: string) => void
  onQuantityChange: (data: string) => void
  onAmountChange: (data: string) => void
}

export type TCounterModel = {
  counter: Ref<number, number>
}

export type TQueueEventModel = {
  queueEvent: Ref<
    {
      id: string
      value: string
    }[],
    | {
        id: string
        value: string
      }[]
    | {
        id: string
        value: string
      }[]
  >
  setEvent: (event: string) => void
}
