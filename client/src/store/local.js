import { ReactiveLocalStorage } from '@unrest/vue-storage'

import varia from '@/varia'

const LS_KEY = 'LOCAL_STORE'

const vec4 = {
  equal: (a, b) => a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3],
}

export default () => {
  const initial = {
    data_url: null,
    filename: null,
    overrides: {},
    selected_region: null,
  }
  const storage = ReactiveLocalStorage({ LS_KEY, initial })

  storage.resolveColor = (color, palettes) => {
    const override = storage.state.overrides[color.id]
    if (!override && color.locked) {
      const base_color = palettes[0].colors[color.index]
      return storage.resolveColor(base_color, palettes)
    }
    return override || color.value
  }
  storage.getOverrides = (region_id, palettes, suit_name = 'power-suit') => {
    const palette_name = varia.special_regions[region_id] || suit_name
    const palette = palettes.find((p) => p.name === palette_name)
    const overrides = palette.colors.map((color) => [
      color.value,
      storage.resolveColor(color, palettes),
    ])
    return overrides.filter((o) => !vec4.equal(o[0], o[1]))
  }

  return storage
}
