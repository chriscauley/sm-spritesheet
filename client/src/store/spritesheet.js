import { RestStorage } from '@unrest/vue-storage'
import { startCase } from 'lodash'

const fromServer = (spritesheet) => {
  Object.assign(spritesheet, {
    folder_url: `/media/data/spritesheets/${spritesheet.name}/`,
    to: `/app/edit-sprite/${spritesheet.name}`,
    display: startCase(spritesheet.name),
  })
  return spritesheet
}

export default () => {
  const slug = 'schema/spritesheet'
  const storage = RestStorage(slug, { collection_slug: slug, fromServer })
  storage.getAll = () => storage.getPage({ query: { per_page: 5000 } })?.items || []
  return storage
}
