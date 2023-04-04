import axios from 'axios'
import { startCase } from 'lodash'
import { reactive } from 'vue'

export default (_store) => {
  const state = reactive({
    data: null,
    get ready() {
      return !!state.data
    },
  })
  axios.get('/static/sprite_data.json').then(({ data }) => {
    Object.values(data).map((spritesheet) => {
      spritesheet.display = startCase(spritesheet.name)
    })
    state.data = data
  })
  return {
    state,
  }
}
