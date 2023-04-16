import { RestStorage } from '@unrest/vue-storage'

const makeQuery = (q) => ({ query: { per_page: 5000, ...q } })

export default () => {
  const slug = 'schema/wardrobe'
  const storage = RestStorage(slug, { collection_slug: slug })
  storage.getAll = (q) => storage.getPage(makeQuery(q))?.items || []
  storage.fetchAll = (q) => storage.fetchPage(makeQuery(q))
  storage.overrideColor = (wardrobe, color_id, value) => {
    wardrobe.data[color_id] = value
    this.$store.wardrobe.save(wardrobe)
  }
  return storage
}
