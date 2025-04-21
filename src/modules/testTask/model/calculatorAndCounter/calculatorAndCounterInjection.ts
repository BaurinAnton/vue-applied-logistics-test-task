import type { InjectionKey } from 'vue'
import type { useCalculatorAndCounterModel } from './calculatorAndCounter'

export const calculatorAndCounterInjectionKey = Symbol() as InjectionKey<
  ReturnType<typeof useCalculatorAndCounterModel>
>
