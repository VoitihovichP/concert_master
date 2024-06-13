export function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>

  const debounced = function (...args: Parameters<T>): void {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }

  const cancel = () => clearTimeout(timeout)

  return { debounced, cancel }
}
