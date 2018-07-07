<template>
	<div>
		{{user}}
		<user-form v-bind:user="user"></user-form>
	</div>
</template>

<script>
	import axios from "axios";
	import UserForm from "@/components/UserForm.vue";

	export default {
		name: "UserEdit",
		components: {
			"user-form": UserForm
		},
		data: () => {
			return {
				user: null
			};
		},
		computed: {
			id() {
				return this.$route.params.id;
			}
		},
		watch: {
			$route: "getUserdata"
		},
		mounted() {
			this.getUserData();
		},
		methods: {
			getUserData() {
				axios
					.get(`http://localhost:3004/users/${this.id}`)
					.then(response => response.data)
					.then(response => {
						debugger;
						this.user = response;
				});
			}
		}
	};
</script>

<style>
</style>
