import varia from '@/varia'
import vec4 from '@/vec4'

export const extractPalette = (ctx, { x, y, width, height, skips = [] }) => {
  // DEPRECATED: unused funciton, use or delete by March 2023
  const image_data = ctx.getImageData(x, y, width, height)
  const data = image_data.data
  const size = width * height
  const colors = {}
  for (let i = 0; i < size; i++) {
    const color = [data[i * 4], data[i * 4 + 1], data[i * 4 + 2], data[i * 4 + 3]]
    const hash = color.toString()
    if (!colors[hash]) {
      colors[hash] = {
        hash,
        color,
        count: 0,
      }
    }
    colors[hash].count++
  }
  return Object.values(colors).filter((swatch) => !skips.includes(swatch.hash))
}

export const saveFile = (text, filename) => {
  if (typeof text === 'object') {
    text = JSON.stringify(text)
  }
  const anchor = document.createElement('a')
  anchor.href = 'data:' + 'text/plain' + 'charset=utf-8,' + escape(text)
  anchor.setAttribute('download', filename)
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}

export const saveImage = (dataurl, filename) => {
  const anchor = document.createElement('a')
  anchor.href = dataurl
  anchor.setAttribute('download', filename)
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}

const getPixelMap = (image_data) => {
  const pixel_map = {}
  for (let i = 0; i < image_data.data.length; i++) {
    const color = image_data.data.slice(i * 4, (i + 1) * 4)
    const hash = color.toString()
    if (!pixel_map[hash]) {
      pixel_map[hash] = []
    }
    pixel_map[hash].push(i)
  }
  return pixel_map
}

export const replaceColors = (image_data, overrides) => {
  const pixel_map = getPixelMap(image_data)
  overrides.forEach(([color1, color2]) => {
    pixel_map[color1]?.forEach((index) => {
      image_data.data[4 * index] = color2[0]
      image_data.data[4 * index + 1] = color2[1]
      image_data.data[4 * index + 2] = color2[2]
      image_data.data[4 * index + 3] = color2[3]
    })
  })
}

export const getOverrides = (region_id, palettes, suit_name, wardrobe) => {
  const palette_name = varia.special_regions[region_id] || suit_name
  const palette = palettes.find((p) => p.name === palette_name)
  const palette_index = palettes.indexOf(palette)
  const overrides = palette.colors.map((color, index) => {
    let { value } = color
    if (palette_index < 4) {
      // suits and death
      value = palettes[0].colors[index].value
    }
    return [value, resolveColor(color, palettes, wardrobe.data)]
  })
  return overrides.filter((o) => !vec4.equal(o[0], o[1]))
}

export const resolveColor = (color, palettes, overrides) => {
  const override = overrides[color.id]
  if (!override && color.locked) {
    const base_color = palettes[0].colors[color.index]
    return resolveColor(base_color, palettes, overrides)
  }
  return override || color.value
}
