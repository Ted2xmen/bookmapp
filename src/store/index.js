import { createStore } from 'vuex'

export default createStore({
  state: {
    bookmarks: [],
    designLogo: '../assets/undraw.png',
    appsLogo: '/assets/apps.png'

  },
  getters: {
    design: state => state.bookmarks.filter(bookmark => bookmark.category === 'Design'),
    apps: state => state.bookmarks.filter(bookmark => bookmark.category === 'Apps'),
    development: state => state.bookmarks.filter(bookmark => bookmark.category === 'Development'),
    vue: state => state.bookmarks.filter(bookmark => bookmark.category === 'Vue'),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
