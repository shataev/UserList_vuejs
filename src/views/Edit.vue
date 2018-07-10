<template>
	<div>
		<div v-if="!user" class="alert alert-warning">
			Нет данных
		</div>
		<user-form
				v-else
				v-model="user">
		</user-form>
		<button class="btn btn-success" @click="saveUserData">Сохранить данные</button>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "UserEdit",
		components: {
			"user-form": () => import("@/components/UserForm.vue")
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
						this.user = response;
				});
			},
			saveUserData() {
				axios
					.patch(`http://localhost:3004/users/${this.id}`, this.user)
					.then(response => {
						console.log(response);
				});
			}
		}
	};
</script>

<style>
</style>
