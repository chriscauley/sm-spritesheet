import { ReactiveLocalStorage } from '@unrest/vue-storage'

const LS_KEY = 'LOCAL_STORE'

export default () => {
  const initial = {
    data_url: null,
    filename: null,
  }
  const storage = ReactiveLocalStorage({ LS_KEY, initial })
  return storage
}
