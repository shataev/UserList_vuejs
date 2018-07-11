<template>
	<nav aria-label="Page navigation">
		<ul class="pagination">
			<li v-if="pagesCount > 1" class="page-item">
				<a class="page-link" href="#" aria-label="Previous">
					<span aria-hidden="true">&laquo;</span>
					<span class="sr-only">Previous</span>
				</a>
			</li>
			<li v-for="{page, pageNum} in pagesArr"
				v-bind:key="pageNum"
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
		data() {
			return {
				pagesCount: 0
			}
		},
		props: {
			pages: {
				type: Number
			}
		},
		computed: {
			pagesArr: () => {
				debugger;
				let pagesArr = [];

				for (let i = 0; i < this.pagesCount; i++) {
					pagesArr.push(i);
				}

				return pagesArr;
			}
		}
	}
</script>

<style>

</style>