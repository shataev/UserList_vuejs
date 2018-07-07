import {} from "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import NProgress from "vue-nprogress";
import App from "./App.vue";
import router from "./router";

Vue.use(NProgress);

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
