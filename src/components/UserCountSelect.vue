<template>
	<div class="form-group user-count-select-wrapper">
		<label for="userCountSelect" class="user-count-select-label">Элементов на странице:</label>
		<select class="form-control user-count-select"
				id="userCountSelect"
				v-on:change="userCountChange">
			<option v-for="count in counts"
					v-bind:key="count">
				{{count}}
			</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'user-count-select',

		data() {
			return {
				counts: [2, 5, 10]
			}
		},
		methods: {
			userCountChange(e) {
				this.$emit('user-count-change', e.target.value);
			}
		}
	}
</script>

<style>
	.user-count-select-wrapper {
		display: flex;
		align-items: baseline;
	}

	.user-count-select-label {
		margin-right: 16px;
	}

	.user-count-select {
		width: auto;
	}
</style>