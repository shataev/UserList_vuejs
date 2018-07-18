<template>
	<div>
		<input type="text"
			   ref="picker"
			   class="form-control"
			   v-bind:value="value"
		>
	</div>
</template>

<script>
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	export default {
		name: "DatePicker",
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			value: {
				type: String,
				required: true
			}
		},
		data: () => ({
			//Экземпляр Flatickr
			pickerInstance: null
		}),
		watch: {
			value: 'updatePicker'
		},
		mounted() {
			this.pickerInstance = flatpickr(this.$refs.picker, {
				dateFormat: 'd.m.Y',
				onChange: (selectedDates, dateStr) => {
					this.$emit('change', dateStr)
				}
			});
		},
		beforeDestroy() {
			this.pickerInstance.destroy();
		},
		methods: {
			updatePicker() {
				if (this.pickerInstance) {
					this.pickerInstance.setDate(this.value);
				}
			}
		}
	}
</script>

<style scoped>

</style>