import { ref, toValue, watchEffect } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref(null)
  const reloadTrigger = ref(0)

  function fetchData() {
    data.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => {
        data.value = json
      })
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    if (reloadTrigger.value >= 0) fetchData()
  })

  function reload() {
    reloadTrigger.value++
  }

  return { data, error, reload }
}
