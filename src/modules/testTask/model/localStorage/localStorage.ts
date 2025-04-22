import { ref } from 'vue'
import type { TCalculatorModel, TCounterModel, TQueueEventModel } from './localStorageTypes'
import { isEven } from '@/core/utils'
import type { TLocalStorageDataDTO } from '../../api/localStorage/DTO'
import { getCalculatorAndCounterData, setCalculatorAndCounterData } from '../../api/localStorage'

export function useLocalStorageModel(
  calculatorModel: TCalculatorModel,
  counterModel: TCounterModel,
  queueEventModel: TQueueEventModel,
) {
  const dataForLocalStorage = ref<string | null>(null)

  function setDataForLocalStorage() {
    if (!isEven(calculatorModel.amount.value)) return

    const data: TLocalStorageDataDTO = {
      amount: calculatorModel.amount.value,
      price: calculatorModel.price.value,
      quantity: calculatorModel.quantity.value,
      counter: counterModel.counter.value,
    }

    queueEventModel.setEvent(
      `событие нажатия кнопки 4 - приложить то что было отправлено: ${JSON.stringify(data)}`,
    )

    queueEventModel.setEvent(
      `событие нажатия кнопки 4 - показать то что в момент нажатия в localStorage: ${getCalculatorAndCounterData()}`,
    )

    setCalculatorAndCounterData(data).then((status) => {
      alert(`Статус отправки: ${status.success}`)
      queueEventModel.setEvent(
        'событие когда получили ответ после нажатия submit (4)' +
          '- приложить то что было отправлено: ' +
          JSON.stringify(data),
      )
      queueEventModel.setEvent(
        'событие когда получили ответ после нажатия submit (4)' +
          ' + то что в этот момент в localStorage: ' +
          getCalculatorAndCounterData(),
      )
      getDataForLocalStorage()
    })
  }

  function getDataForLocalStorage() {
    dataForLocalStorage.value = getCalculatorAndCounterData()
  }

  return { dataForLocalStorage, setDataForLocalStorage }
}
