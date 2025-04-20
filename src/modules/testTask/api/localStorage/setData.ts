import type { TLocalStorageDTO } from './DTO'
import { CALCULATOR_AND_COUNTER } from './keys'

export function setCalculatorAndCounterData(data: TLocalStorageDTO) {
  localStorage.setItem(CALCULATOR_AND_COUNTER, JSON.stringify(data))
}
