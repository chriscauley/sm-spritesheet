// constants and functionality relating to varia compatible super-metroid sprite sheets
import data from './data.json'
import { range, cloneDeep } from 'lodash'

const varia = cloneDeep(data)

varia.extractPalettes = (ctx) => {
  const x = 378
  const y = 1
  const width = 8 * 15
  const height = 8 * 7
  const image_data = ctx.getImageData(x, y, width, height)
  const palettes = varia.palette_names.map((name, y_index) => ({
    name,
    colors: range(15).map((x_index) => {
      const offset = y_index * width * 8 + x_index * 8
      const value = Array.from(image_data.data.slice(4 * offset, 4 * (offset + 1)))
      return {
        id: `${name}__${x_index}`,
        index: x_index,
        value,
        hash: value.toString(),
        empty: value[4] === 0,
        palette: name,
      }
    }),
  }))
  const og = palettes[0].colors
  palettes.slice(1, 4).forEach((p) =>
    p.colors.forEach((c, i) => {
      c.locked = c.hash === og[i].hash
    }),
  )
  return palettes
}

varia.drawPalettes = (ctx, palettes, overrides) => {
  const x = 378
  const y = 1
  palettes.forEach((palette, y_index) => {
    palette.colors.forEach((color, x_index) => {
      if (overrides[color.id]) {
        ctx.fillStyle = `rgba(${overrides[color.id].join(',')})`
        ctx.fillRect(x + x_index * 8, y + y_index * 8, 8, 8)
      }
    })
  })
}

export default varia
