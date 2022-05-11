import { ref } from 'vue'
import axios from 'axios'
function useURLLoader<T>(url: string){
  
  const data = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
  axios.get(url).then((rawData) => {
    loading.value = false
    loaded.value = true
    data.value = rawData.data
  }).catch(e => {
    error.value = e
    loading.value = false
  })
  return { loading, loaded, data }
}
export default useURLLoader