<template>
    <div>
        {{user}}
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserEdit",
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
  mounted() {
    this.getUserData(this.id);
  },
  methods: {
    getUserData(id) {
      axios
        .get(`http://localhost:3004/users/${id}`)
        .then(response => response.data)
        .then(response => (this.user = response));
    }
  }
};
</script>

<style>
</style>
