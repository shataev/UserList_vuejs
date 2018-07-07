import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import Edit from "@/views/Edit.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/users",
			name: "users",
			component: Users
		},
		{
			path: "/users/:id",
			name: "edit",
			component: Edit
		}
	]
});
