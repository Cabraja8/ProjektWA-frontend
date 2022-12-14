import Vue from "vue";
import App from "./App.vue";
import router from "./router";
const eventHub = new Vue(); // Single event hub

Vue.mixin({
  data: function () {
    return {
      eventHub: eventHub,
    };
  },
});

import Croppa from "vue-croppa";

Vue.use(Croppa);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
