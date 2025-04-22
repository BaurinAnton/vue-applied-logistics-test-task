import { useCalculatorModel } from '../calculator'
import { useCounterModel } from '../counter'
import { useQueueEvent } from '../queueEvent'
import { useLocalStorageModel } from '../localStorage/localStorage'

export function useCalculatorAndCounterModel() {
  const queueEventModel = useQueueEvent()
  const counterModel = useCounterModel()
  const calculatorModel = useCalculatorModel(queueEventModel)
  const localStorageModel = useLocalStorageModel(calculatorModel, counterModel, queueEventModel)

  return {
    calculatorModel,
    counterModel,
    queueEventModel,
    localStorageModel,
  }
}
