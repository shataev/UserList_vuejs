<template>
    <div id="app">
        <div class="nprogress-container"></div>
        <div id="nav">
        </div>

        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <router-link class="navbar-brand" to="/">
                UserList SPA
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" exact>
                            <a href="" class="nav-link">
                                Главная
                            </a>
                        </router-link>
                    </li>
                    <router-link tag="li" class="nav-item" to="/users">
                        <a href="" class="nav-link">
                            Список пользователей
                        </a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/phones">
                        <a href="" class="nav-link">
                            Телефонный справочник
                        </a>
                    </router-link>
                </ul>
            </div>
        </nav>

        <main role="main" class="container">
            <router-view/>
        </main>
    </div>
</template>

<script>
	import NprogressContainer from "vue-nprogress/src/NprogressContainer.vue";

	export default {
		components: {
			NprogressContainer
		}
	};
</script>

<style>
#app {
	margin-top: 60px;
}
</style>
