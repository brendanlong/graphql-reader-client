import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let nextId = 0;
function getId() {
  const id = nextId;
  nextId += 1;
  return id;
}

export default new Vuex.Store({
  state: {
    feeds: {},
    feedEntries: {},
    entries: {}
  },
  mutations: {
    addEntry(state, entry) {
      Vue.set(state.entries, entry.id, entry);
      const entries = new Set(state.feedEntries[entry.feedId]);
      entries.add(entry.id);
      Vue.set(state.feedEntries, entry.feedId, entries);
    },

    addFeed(state, feed) {
      Vue.set(state.feeds, feed.id, feed);
    },

    removeFeed(state, feed) {
      Vue.delete(state.feeds, feed.id);
    }
  },
  actions: {
    addFeed(state, { url }) {
      const feed = {
        id: getId(),
        title: url,
        url
      };
      this.commit("addFeed", feed);

      const entry = {
        id: getId(),
        feedId: feed.id,
        title: "Example entry",
        content: "Lorem ipsum"
      };
      this.commit("addEntry", entry);
    }
  }
});
