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
