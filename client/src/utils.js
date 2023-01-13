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

export const varia_regions = {
  'file-select': [332, 58, 212, 34],
  'cannon-ports': [408, 92, 60, 50],
  xray: [268, 1586, 340, 92],
  'crystal-flash': [232, 2110, 412, 53],
  'death-fg': [166, 2387, 544, 66],
  'death-bg': [204, 2453, 468, 90],
  loading: [98, 142, 680, 58],
  standing__up: [311, 200, 254, 58],
  standing: [115, 258, 646, 50],
  standing__down: [345, 308, 186, 58],
  crouching__up: [159, 366, 558, 58],
  crouching: [115, 424, 646, 42],
  crouching__down: [345, 466, 186, 42],
  running: [18, 508, 840, 50],
  running__up: [18, 558, 840, 58],
  running__aim: [18, 616, 840, 50],
  running__down: [18, 666, 840, 50],
  moonwalk: [234, 716, 408, 58],
  moonwalk__up: [234, 774, 408, 58],
  moonwalk__down: [234, 832, 408, 58],
  jumping: [0, 890, 876, 348],
  falling: [209, 1238, 458, 348],
  'dragon-grabbed': [98, 1678, 680, 58],
  hit: [370, 1736, 136, 58],
  bonk: [18, 1794, 840, 50],
  'spin-jump': [30, 1844, 816, 50],
  'wall-jump': [328, 1894, 220, 42],
  'shine-spark': [363, 1936, 152, 50],
  'screw-attack': [14, 1986, 848, 38],
  morphing__left: [98, 2024, 68, 34],
  morphing__right: [710, 2024, 68, 34],
  ball__still: [166, 2032, 544, 26],
  ball__roll: [166, 2058, 544, 26],
  ball__fall: [166, 2084, 544, 26],
  exhaustion: [166, 2163, 544, 42],
  'stand-up': [370, 2205, 136, 50],
  grapple: [0, 2255, 808, 132],
  hang: [808, 2255, 68, 132],
}

export const extractPalette = (ctx, { x, y, width, height, skips = varia_skips }) => {
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

export const extractVariaPalettes = (ctx) => {
  const x = 378
  const y = 1
  const width = 8 * 15
  const height = 8 * 7
  const image_data = ctx.getImageData(x, y, width, height)
  return varia_palette_names.map((name, y_index) => {
    return {
      name,
      colors: range(15).map((x_index) => {
        const offset = y_index * width * 8 + x_index * 8
        const value = Array.from(image_data.data.slice(4 * offset, 4 * (offset + 1)))
        return {
          name: `${name}__${x_index}`,
          value,
          empty: value[4] === 0,
        }
      }),
    }
  })
}
