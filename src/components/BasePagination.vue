<template>
	<div v-if="isDataLoaded">
		<el-pagination
			:page-size="perPage"
			layout="sizes, prev, pager, next"
			@current-change="changePage"
			@size-change="changePerPage"
			:current-page="currentPage"
			:total="dataToPaginate.length"
			:page-sizes="[5, 10, 15]"
		></el-pagination>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BasePagination extends Vue {
	@Prop(Array) readonly dataToPaginate: Array<any> | null;

	public paginatedData: Array<any> | undefined = undefined;

	private currentPage = 1;

	private perPage = 5;

	created(): void {
		this.changePage(1);
	}

	private changePage(number: number): void {
		this.currentPage = number;
		this.updatePagination();
	}

	private changePerPage(pageSize: number): void {
		this.perPage = pageSize;
		this.updatePagination();
	}

	private updatePagination(): void {
		this.paginatedData = this.dataToPaginate?.slice(
			(this.currentPage - 1) * this.perPage,
			this.currentPage * this.perPage
		);
		this.$emit('pagination-updated', this.paginatedData);
	}

	get isDataLoaded(): boolean {
		return this.dataToPaginate !== null;
	}
}
</script>
