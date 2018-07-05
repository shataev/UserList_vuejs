<template>
    <div class="users-list-wrapper">
        <div class="friends-list-heading-container">
            <h5 class="users-list-heading">Список пользователей <span class="users-count">({{usersCount}})</span></h5>
            <button v-on:click="toggleListVisibility"
                    v-tooltip.right="showHideButtonTitleText"
                    class="show-hide-list-button button"
                    type="button"
            >{{showHideButtonText}}
            </button>
        </div>
        <ul class="users-list"
            v-show="visible"
        >
            <li class="users-list-item user users-list-heading-item">
                <div class="user-id">ID</div>
                <div class="user-name">ФИО</div>
                <div class="">Фото</div>
            </li>
            <li v-for="user in users"
                class="users-list-item user"
                v-bind:class="`user-${user.id}`"
                v-bind:key="user.id"
            >
                <div class="user-id">{{user.id}}</div>
                <div class="user-name">{{getFullName(user) | uppercase}}</div>
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
                <router-link v-bind:to="`/users/${user.id}`"
                             v-tooltip.right="editBtnTooltip"
                             class="edit-user-button button">
                    <font-awesome-icon
                            icon="edit" />
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
import Copy from "v-copy";
import VTooltip from "v-tooltip";

Vue.use(Copy);
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
    uppercase: function(value) {
      if (value) {
        return value.toUpperCase();
      }
    }
  },
  methods: {
    toggleListVisibility: function() {
      this.visible = !this.visible;
    },
    getFullName: function(user) {
      let fullName = `${user.firstName || ""} ${user.lastName || ""}`;

      return fullName;
    },
    openEditUserPage: function(id) {
      this.$emit("show-user-form", id);
    }
  },
  template: "#users-list"
};
</script>

<style>
.users-list-wrapper {
  width: 400px;
}

.user-list-heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  border-radius: 5px;
  box-shadow: none;
  outline: none;
  border: 1px solid #c5c0c0;
  background: #ececec;
  font-size: 14px;
  cursor: pointer;
}

.show-hide-list-button {
  width: 80px;
  height: 30px;
  outline: none;
}

.users-list {
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
}

.users-list-item.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.users-list-item.user:last-child {
  border: none;
}

.user-photo-wrapper {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 20px;
}

.user-name {
  font-family: sans-serif;
  font-size: 18px;
  flex-grow: 2;
}

.user-photo {
  width: 100%;
}

.copy-fullname-button,
.edit-user-button {
  background: none;
  border: none;
  padding: 0;
}

.copy-fullname-button {
  margin-right: 20px;
}

.user-data-edit-form {
  padding: 0;
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
