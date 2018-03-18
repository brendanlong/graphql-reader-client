<template>
  <div id="entry-list">
    <div v-if="feed">
      <h1>{{ feed.title }}</h1>
      <ul class="entries">
        <li
          v-for="entry in entries"
          :key="entry.id">
          <router-link :to="'/feed/' + feed.id + '/entries/' + entry.id">
            {{ entry.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EntryList",
  computed: mapState({
    feed(state) {
      const { feedId } = this.$route.params;
      if (feedId) {
        return state.feeds[feedId];
      }
      return null;
    },
    entries(state) {
      const { feedId } = this.$route.params;
      if (feedId) {
        const entryIds = state.feedEntries[feedId];
        if (entryIds) {
          return Array.from(entryIds).map(id => state.entries[id]);
        }
      }
      return null;
    }
  })
};
</script>

<style scoped>
</style>
