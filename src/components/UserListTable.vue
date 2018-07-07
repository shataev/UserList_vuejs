<template>
	<div class="card users-table-container">
		<div class="card-header">
			Всего пользователей: <span class="users-total-count">{{usersCount}}</span>
		</div>
		<div class="card-body">
			<table class="table table-striped users-table" v-show="visible">
				<thead class="">
				<tr class="users-table-heading">
					<th scope="col">ID</th>
					<th scope="col">Фото</th>
					<th scope="col">Имя</th>
					<th scope="col">Фамилия</th>
					<th scope="col">Возраст</th>
					<th scope="col">Компания</th>
					<th scope="col">E-mail</th>
					<th scope="col">Действия</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="user in users"
					v-bind:class="userClass(user)"
					v-bind:key="user.id"
					class="user-item"
				>
					<td>{{user.id}}</td>
					<td>
						<div class="user-photo-wrapper">
							<img v-if="user.picture"
								 v-bind:src="user.picture"
								 alt="photo"
								 class="user-photo">
							<img v-else
								 v-bind:src="defaultPhoto"
								 alt="No photo"
								 class="user-photo default">
						</div>
					</td>
					<td>{{user.firstName}}</td>
					<td>{{user.lastName}}</td>
					<td>{{user.age}}</td>
					<td>{{user.company}}</td>
					<td>{{user.email}}</td>
					<td>
						<router-link v-bind:to="`/users/${user.id}`"
									 class="edit-user-button button btn btn-primary">
							<font-awesome-icon icon="edit"/>
						</router-link>
						<button class="edit-user-button button btn btn-danger"
								@click="delBtnClick(user.id)">
							<font-awesome-icon icon="trash-alt"/>
						</button>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import VTooltip from "v-tooltip";
	import { library } from "@fortawesome/fontawesome-svg-core";
	import { faEdit, faCopy, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
	import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

	library.add(faEdit, faCopy, faTrashAlt);

	Vue.component("font-awesome-icon", FontAwesomeIcon);

	Vue.use(VTooltip);

	export default {
		name: "UserList",
		props: {
			users: {
				type: Array,
				required: true
			}
		},
		data: function() {
			return {
				defaultPhoto: "http://via.placeholder.com/200x200?text=No%20photo",
				visible: true,
				editBtnTooltip: "Редактировать данные пользователя"
			};
		},
		computed: {
			usersCount: function() {
				return this.users.length;
			},
			showHideButtonText: function() {
				return this.visible ? "Скрыть" : "Показать";
			},
			showHideButtonTitleText: function() {
				return this.visible
					? "Скрыть список пользователей"
					: "Показать список пользователей";
			}
		},
		filters: {
			uppercase(value) {
				if (value) {
					return value.toUpperCase();
				}
			}
		},
		methods: {
			openEditUserPage(id) {
				this.$emit("show-user-form", id);
			},
			userClass(user) {
				return `user-${user.id}`;
			},
			delBtnClick(id) {
				this.$emit("delete-button-click", id);
			}
		},
		template: "#users-list"
	};
</script>

<style>
.users-table-container {
	margin-bottom: 16px;
}

.users-table th,
.users-table td {
	text-align: center;
}

.users-table td {
	vertical-align: middle;
}

.user-photo-wrapper {
	width: 100px;
	height: 100px;
	overflow: hidden;
	border-radius: 50%;
	flex-shrink: 0;
	margin: 0 auto;
}

.user-photo {
	width: 100%;
}

.edit-user-button {
	margin-right: 10px;
}

.tooltip.vue-tooltip-theme {
	opacity: 1;
	left: 10px !Important;
}

.tooltip-arrow {
	left: -5px;
	width: 10px;
	height: 10px;
	background: #000;
	position: absolute;
	top: -5px;
	transform: rotateZ(-45deg);
}
</style>
