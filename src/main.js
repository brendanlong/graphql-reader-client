import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/feed/:feedId"
    },
    {
      path: "/feed/:feedId/entries/:entryId"
    }
  ]
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
