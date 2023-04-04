import local from './local'
import app from './app'
import spritesheet from './spritesheet'

const modules = { local, app, spritesheet }

const store = {
  install(app) {
    app.config.globalProperties.$store = store
    store._app = app

    Object.entries(modules).forEach(([name, module]) => {
      store[name] = module({ store })
    })
  },
}

export default store
