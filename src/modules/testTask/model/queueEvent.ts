import { ref } from 'vue'

export function useQueueEvent() {
  const queueEvent = ref<Array<{ id: string; value: string }>>([])

  function setEvent(event: string) {
    queueEvent.value.unshift({ id: String(queueEvent.value.length + 1), value: event })
  }

  return { queueEvent, setEvent }
}
