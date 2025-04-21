import { ref } from 'vue'
import { getCalculatorAndCounterData, setCalculatorAndCounterData } from '../../api/localStorage'
import type { TLocalStorageDataDTO } from '../../api/localStorage/DTO'
import { useCalculatorModel } from '../calculator'
import { useCounterModel } from '../counter'
import { useQueueEvent } from '../queueEvent'

export function useCalculatorAndCounterModel() {
  const calculatorModel = useCalculatorModel()
  const counterModel = useCounterModel()
  const queueEventModel = useQueueEvent()
  const dataForLocalStorage = ref<string | null>(null)

  function setData() {
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

  return {
    calculatorModel,
    counterModel,
    queueEventModel,
    setData,
    dataForLocalStorage,
  }
}
