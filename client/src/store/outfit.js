import { RestStorage } from '@unrest/vue-storage'

export default () => {
  const slug = 'schema/outfit'
  const storage = RestStorage(slug, { collection_slug: slug })
  return storage
}
