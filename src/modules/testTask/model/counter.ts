import { onMounted, onUnmounted, ref } from 'vue'

export function useCounterModel() {
  const counter = ref<number>(0)
  const idTimeout = ref<number | null>(null)

  function increment() {
    counter.value++
  }

  function tick() {
    idTimeout.value = setTimeout(() => {
      increment()
      tick()
    }, 1000)
  }

  onMounted(() => {
    tick()
  })

  onUnmounted(() => {
    if (idTimeout.value === null) return

    clearTimeout(idTimeout.value)
  })

  return { counter }
}
