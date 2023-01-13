import local from './local'

const modules = { local }

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
