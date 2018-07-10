<template>
	<div class="edit-user-form-container">
		<div class="form-group">
			<label for="userPicture">Аватар</label>
			<div class="user-avatar-img-wrapper">
				<img :src="localUser.picture" alt="" class="user-avatar-img">
			</div>
			<input type="file" class="form-control-file is-hidden" id="userPicture" ref="avatarUploadInput" @change="uploadAvatar" >
			<input type="text" v-model="localUser.picture" class="form-control user-avatar-input">
			<button type="button" class="btn btn-primary" @click="initUploadAvatar">Загрузить аватар</button>
		</div>
		<div class="form-group">
			<label for="userFirstName">Имя</label>
			<input type="text" class="form-control" id="userFirstName"
				   placeholder="Введите имя" v-model="localUser.firstName">
		</div>
		<div class="form-group">
			<label for="userLastName">Фамилия</label>
			<input type="text" class="form-control" id="userLastName"
				   placeholder="Введите фамилию" v-model="localUser.lastName">
		</div>
		<div class="form-group">
			<label for="userAge">Возраст</label>
			<input type="number" class="form-control" id="userAge"
				   placeholder="" v-model="localUser.age">
		</div>
		<div class="form-group">
			<label for="userEmail">E-mail</label>
			<input type="email" class="form-control" id="userEmail"
				   placeholder="Введите email" v-model="localUser.email">
		</div>
		<div class="form-group">
			<label for="userPhone">Телефон</label>
			<input type="text" class="form-control" id="userPhone"
				   placeholder="Номер телефона" v-model="localUser.phone">
		</div>
		<div class="form-group">
			<label for="userAdress">Адрес</label>
			<input type="text" class="form-control" id="userAdress"
				   placeholder="Введите адрес" v-model="localUser.adress">
		</div>
		<div class="form-group">
			<label for="registeredDate">Дата регистрации</label>
			<input type="date" class="form-control" id="registeredDate"
				   placeholder="" v-model="localUser.registered">
		</div>
		<div class="form-group">
			<label for="userCompany">Компания</label>
			<input type="text" class="form-control" id="userCompany"
				   placeholder="Введите название компании" v-model="localUser.company">
		</div>
		<div class="form-group">
			<label for="balance">Баланс</label>
			<input type="text" class="form-control" id="balance"
				   placeholder="Введите баланс" v-model="localUser.balance">
		</div>
		<div class="form-group">
			<label for="accessLevel">Группа</label>
			<select class="form-control" id="accessLevel" v-model="localUser.accessLevel">
				<option v-for="item in accessLevels"
						v-bind:value="item.value"
						v-bind:key="item.value">{{item.name}}</option>
			</select>
		</div>
		<div class="form-group">
			<label for="userAboutInfo">Дополнительная информация</label>
			<textarea class="form-control" id="userAboutInfo"
					  placeholder="Введите дополнительную информацию" v-model="localUser.about"></textarea>
		</div>
		<div class="form-group form-check">
			<input type="checkbox" class="form-check-input" id="isActive" v-model="localUser.isActive">
			<label class="form-check-label" for="isActive">Активен</label>
		</div>

	</div>
</template>

<script>
	import uploadConfig from "@/config/cloudinary.js";
	import axios from "axios";

	export default {
		name: "UserForm",
		model: {
			prop: "user",
			event: "inputUserInfo"
		},
		props: {
			user: {
				type: Object,
				required: true
			}
		},
		data: () => ({
			localUser: null,
			accessLevels: [
				{
					name: "Администратор",
					value: "admin"
				},
				{
					name: "Гость",
					value: "guest"
				},
				{
					name: "Пользователь",
					value: "user"
				}
			]
		}),
		created() {
			this.localUser = Object.assign({}, this.user);
		},
		watch: {
			localUser: {
				deep: true,
				handler() {
					this.$emit("inputUserInfo", this.localUser);
				}
			}
		},
		methods: {
			initUploadAvatar() {
				this.$refs.avatarUploadInput.click();
			},
			uploadAvatar(e) {
				//this.localUser.picture = e.target.files[0].name;
				const file = e.target.files[0];
				const data = new FormData();

				data.append("file", file);
				data.append("upload_preset", uploadConfig.presetName);

				axios.post(uploadConfig.url, data).then(response => {
					this.localUser.picture = response.data.secure_url;
				});
			}
		}
	};
</script>

<style>
.is-hidden {
	display: none;
}

.user-avatar-img-wrapper {
	width: 150px;
	height: 150px;
	overflow: hidden;
	margin-bottom: 16px;
}

.user-avatar-img {
	width: 100%;
	height: 100%;
}

.user-avatar-input {
	margin-bottom: 10px;
}
</style>
