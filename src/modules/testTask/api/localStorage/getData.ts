import type { TLocalStorageDTO } from './DTO'
import { CALCULATOR_AND_COUNTER } from './keys'

export function getCalculatorAndCounterData(): TLocalStorageDTO | null {
  const jsonData = localStorage.getItem(CALCULATOR_AND_COUNTER)
  if (jsonData === null) return null
  const parsedData = JSON.parse(jsonData)
  const validatedData = validateData(parsedData)

  return validatedData
}

function validateData(data: unknown): TLocalStorageDTO | null {
  if (isLocalStorageDTO(data)) {
    return data
  }

  return null
}

function isLocalStorageDTO(data: unknown): data is TLocalStorageDTO {
  return (
    typeof data === 'object' &&
    data !== null &&
    'counter' in data &&
    'price' in data &&
    'quantity' in data &&
    'amount' in data &&
    isNumber(data.counter) &&
    isNumber(data.price) &&
    isNumber(data.quantity) &&
    isNumber(data.amount)
  )
}

function isNumber(x: unknown): x is number {
  return typeof x === 'number'
}
