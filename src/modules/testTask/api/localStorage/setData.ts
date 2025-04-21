import type { TLocalStorageDataDTO, TResponse } from './DTO'
import { CALCULATOR_AND_COUNTER } from './keys'

export function setCalculatorAndCounterData(data: TLocalStorageDataDTO): Promise<TResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(CALCULATOR_AND_COUNTER, JSON.stringify(data))
      resolve({ success: true })
    }, 1000)
  })
}
