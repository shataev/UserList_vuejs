<template>
	<nav aria-label="Page navigation">
		<ul class="pagination">
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
					<span class="sr-only">Previous</span>
				</a>
			</li>
			<li v-for="(pageNum, index) in pagesNums"
				v-bind:key="index"
				v-bind:class="{active: pageNum == activePageNum}"
				v-on:click="selectPageNum(pageNum)"
				class="page-item">
				<a class="page-link" href="#">{{pageNum}}</a>
			</li>
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Next">
					<span aria-hidden="true">&raquo;</span>
					<span class="sr-only">Next</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'Paginator',
		props: {
			pagesCount: {
				type: Number
			},
			activePageNum: Number
		},
		data: function() {
			return {

			}
		},
		computed: {
			pagesNums: function() {
				let pagesArr = [];

				for (let i = 1; i <= this.pagesCount; i++) {
					pagesArr.push(i);
				}

				return pagesArr;
			},
		},
		methods: {
			selectPageNum(num) {
				//debugger;
				this.activePage = num;
				this.$emit('select-page-num', num);
			}
		}
	}
</script>

<style>

</style>