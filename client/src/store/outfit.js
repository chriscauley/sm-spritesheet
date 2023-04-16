import { RestStorage } from '@unrest/vue-storage'

export default () => {
  const slug = 'schema/outfit'
  const storage = RestStorage(slug, { collection_slug: slug })

  storage.getAll = () => storage.getPage({ query: { per_page: 5000 } })?.items || []

  return storage
}
