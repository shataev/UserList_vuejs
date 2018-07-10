<template>
	<div>
		<div v-if="!list.length" class="alert alert-warning">
			Нет пользователей
		</div>
		<user-list
				v-else v-bind:users="list"
				v-on:delete-user="deleteUser">
		</user-list>
		<button type="button" v-on:click="loadData" class="btn btn-primary">
			Загрузить данные
		</button>
	</div>
</template>

<script>
	import axios from "axios";
	//import UserList from "@/components/UserList.vue";
	import UserList from "@/components/UserListTable.vue";

	export default {
		name: "UserListPage",
		components: {
			"user-list": UserList
		},
		data: () => ({
			list: []
		}),
		methods: {
			loadData() {
				axios
					.get("http://localhost:3004/users")
					.then(response => response.data)
					.then(data => (this.list = data));
			},
			deleteUser(id) {
				axios.delete(`http://localhost:3004/users/${id}`).then(response => {
					if (response.status == 200) {
						this.list = this.list.filter(item => item.id !== id);
					}
				});
			}
		}
	};
</script>

<style>
</style>
