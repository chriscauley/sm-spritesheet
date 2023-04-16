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

export default ({ store }) => {
  const slug = 'schema/spritesheet'
  const storage = RestStorage(slug, { collection_slug: slug, fromServer })
  storage.getAll = () => storage.getPage({ query: { per_page: 5000 } })?.items || []
  storage.getCurrent = () => {
    const { spritesheet_name } = store._app.config.globalProperties.$route.params
    return storage.getAll().find((s) => s.name === spritesheet_name)
  }
  return storage
}
