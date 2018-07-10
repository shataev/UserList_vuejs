import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	linkActiveClass: "active",
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("@/views/Home.vue")
		},
		{
			path: "/users",
			name: "users",
			component: () => import("@/views/Users.vue")
		},
		{
			path: "/users/:id",
			name: "edit",
			component: () => import("@/views/Edit.vue")
		}
	]
});
