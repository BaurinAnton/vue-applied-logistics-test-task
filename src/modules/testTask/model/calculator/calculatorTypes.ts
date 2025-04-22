import type { Ref } from 'vue'

export type TQueue = Array<'price' | 'quantity' | 'amount'>
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
