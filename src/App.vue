<template>
  <div id="app">
    <FeedList/>
    <EntryList/>
    <Entry/>
  </div>
</template>

<script>
import Entry from "./components/Entry.vue";
import EntryList from "./components/EntryList.vue";
import FeedList from "./components/FeedList.vue";

export default {
  name: "App",
  components: {
    Entry,
    EntryList,
    FeedList
  }
};
</script>

<style>
</style>
