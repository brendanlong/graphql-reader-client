<template>
  <div id="entry">
    <div v-if="entry">
      <h1>{{ entry.title }}</h1>
      <div id="entry-content">
        {{ entry.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Entry",
  computed: mapState({
    entry(state) {
      const { entryId } = this.$route.params;
      if (entryId) {
        return state.entries[entryId];
      }
      return null;
    }
  })
};
</script>

<style scoped>
</style>
