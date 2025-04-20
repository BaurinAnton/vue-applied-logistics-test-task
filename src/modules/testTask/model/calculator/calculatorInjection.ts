import type { InjectionKey } from 'vue'
import type { useCalculatorModel } from './calculator'

export const calculatorInjectionKey = Symbol() as InjectionKey<
  ReturnType<typeof useCalculatorModel>
>
