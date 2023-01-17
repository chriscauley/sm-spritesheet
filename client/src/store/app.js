import { reactive } from 'vue'

export default () => {
  const initial = { palettes: null }
  return { state: reactive(initial) }
}
