export function debounce<T>(func: (data: T) => void, delay: number) {
  let timeoutId: number | null = null

  return function (data: T) {
    if (typeof timeoutId === 'number') {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func(data)
    }, delay)
  }
}
