import { ref } from 'vue'
import { getCalculatorAndCounterData, setCalculatorAndCounterData } from '../../api/localStorage'
import type { TLocalStorageDataDTO } from '../../api/localStorage/DTO'
import { useCalculatorModel } from '../calculator'
import { useCounterModel } from '../counter'

export function useCalculatorAndCounterModel() {
  const calculatorModel = useCalculatorModel()
  const counterModel = useCounterModel()
  const calculatorAndCounterDataForLocalStorage = ref<string | null>(null)

  function setData() {
    const data: TLocalStorageDataDTO = {
      amount: calculatorModel.amount.value,
      price: calculatorModel.price.value,
      quantity: calculatorModel.quantity.value,
      counter: counterModel.counter.value,
    }

    setCalculatorAndCounterData(data).then((status) => {
      alert(`Статус отправки: ${status.success}`)
      setCalculatorAndCounterDataForLocalStorage()
    })
  }

  function setCalculatorAndCounterDataForLocalStorage() {
    calculatorAndCounterDataForLocalStorage.value = getCalculatorAndCounterData()
  }

  return { calculatorModel, counterModel, setData, calculatorAndCounterDataForLocalStorage }
}
