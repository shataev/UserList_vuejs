import Vue from "vue";
import NProgress from "vue-nprogress";
import App from "./App.vue";
import router from "./router";
import {} from "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(NProgress);

library.add(faEdit, faCopy);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

const nprogress = new NProgress();

router.beforeResolve((to, from, next) => {
  if (to.path) {
    nprogress.start();
  }

  next();
});

router.afterEach(() => {
  nprogress.done();
});

new Vue({
  nprogress,
  router,
  render: h => h(App)
}).$mount("#app");
