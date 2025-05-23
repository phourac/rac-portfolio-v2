export function useCounter() {
  const counter = useState<number>('counter', () => 10)

  const increment = () => {
    counter.value++
  }

  const reset = () => {
    counter.value = 0
  }

  return { counter, increment, reset }
}
