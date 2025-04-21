import { ref } from 'vue'

export function useQueueEvent() {
  const queueEvent = ref<Array<string>>([])

  function setEvent(event: string) {
    queueEvent.value.unshift(event)
  }

  return { queueEvent, setEvent }
}
