<template>
	<div class="edit-user-form-container">
		<div class="form-group">
			<label for="userPicture">Аватар</label>
			<input type="text" class="form-control" id="userPicture"
				   placeholder="Enter email">
		</div>
		<div class="form-group">
			<label for="userFirstName">Имя</label>
			<input type="text" class="form-control" id="userFirstName"
				   placeholder="Введите имя">
		</div>
		<div class="form-group">
			<label for="userLastName">Фамилия</label>
			<input type="text" class="form-control" id="userLastName"
				   placeholder="Введите фамилию">
		</div>
		<div class="form-group">
			<label for="userAge">Возраст</label>
			<input type="number" class="form-control" id="userAge"
				   placeholder="">
		</div>
		<div class="form-group">
			<label for="userEmail">E-mail</label>
			<input type="email" class="form-control" id="userEmail"
				   placeholder="Введите email">
		</div>
		<div class="form-group">
			<label for="userPhone">Телефон</label>
			<input type="number" class="form-control" id="userPhone"
				   placeholder="Номер телефона">
		</div>
		<div class="form-group">
			<label for="userAdress">Адрес</label>
			<input type="text" class="form-control" id="userAdress"
				   placeholder="Введите адрес">
		</div>
		<div class="form-group">
			<label for="registeredDate">Дата регистрации</label>
			<input type="date" class="form-control" id="registeredDate"
				   placeholder="">
		</div>
		<div class="form-group">
			<label for="userCompany">Компания</label>
			<input type="text" class="form-control" id="userCompany"
				   placeholder="Введите название компании">
		</div>
		<div class="form-group">
			<label for="balance">Баланс</label>
			<input type="text" class="form-control" id="balance"
				   placeholder="Введите баланс">
		</div>
		<div class="form-group">
			<label for="accessLevel">Группа</label>
			<select class="form-control" id="accessLevel">
				<option>Пользователь</option>
				<option>Администратор</option>
				<option>Гость</option>
			</select>
		</div>
		<div class="form-group">
			<label for="userAboutInfo">Дополнительная информация</label>
			<textarea class="form-control" id="userAboutInfo"
					  placeholder="Введите дополнительную информацию"></textarea>
		</div>
		<div class="form-group form-check">
			<input type="checkbox" class="form-check-input" id="exampleCheck1">
			<label class="form-check-label" for="exampleCheck1">Активен</label>
		</div>

	</div>
</template>

<script>
	export default {
		name: "UserForm",
		props: {
			user: {
				type: Object,
				required: true
			}
		},
		data: function() {
			return {
				localUser: null
			};
		},
		created() {
			debugger;
			this.localUser = Object.assign({}, this.user);
		}
	};
</script>

<style>
</style>
