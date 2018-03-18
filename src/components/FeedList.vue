<template>
  <div id="feed-list">
    <h1>Feeds</h1>
    <ul class="feeds">
      <li
        v-for="feed in feeds"
        :key="feed.id">
        <router-link :to="'/feed/' + feed.id">{{ feed.title }}</router-link>
      </li>
    </ul>
    <div class="feed-subscribe">
      <input
        v-model.trim="subscribeUrl"
        placeholder="RSS feed URL">
      <button @click="subscribe">Subscribe</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "FeedList",
  data: () => ({
    subscribeUrl: ""
  }),
  computed: mapState({
    feeds: state => state.feeds
  }),
  methods: {
    ...mapActions(["addFeed"]),
    subscribe() {
      const feed = {
        title: "Example",
        url: this.subscribeUrl
      };
      this.addFeed(feed);
    }
  }
};
</script>

<style scoped>
</style>
