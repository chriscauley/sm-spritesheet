import { range } from 'lodash'

const varia_skips = ['0,0,0,0', '0,0,127,0']
const varia_palette_names = [
  'power-suit',
  'varia-suit',
  'gravity-suit',
  'death',
  'crystal-flash',
  'file-select',
  'xray-ship',
]

export const extractPalette = (ctx, { x, y, width, height, skips = varia_skips }) => {
  const image_data = ctx.getImageData(x, y, width, height)
  const data = image_data.data
  const size = width * height
  const length = size * 4
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

export const extractVariaPalettes = (ctx) => {
  const out = {}
  const x = 378
  const y = 1
  const width = 8 * 15
  const height = 8 * 7
  const image_data = ctx.getImageData(x, y, width, height)
  return varia_palette_names.map((name, y_index) => {
    const y_offset = y_index * 4 * width
    return {
      name,
      colors: range(15).map(x_index => {
        const offset = y_index * width * 8 + x_index * 8
        const value = Array.from(image_data.data.slice(4 * offset, 4 * (offset + 1)))
        console.log(value, 4 * offset, 4 * (offset + 1))
        return {
          name: `${name}__${x_index}`,
          value,
          empty: value[4] === 0,
        }
      })
    }
  })
}