<template>
	<el-row v-if="dataLoaded">
		<el-col :offset="8">
			{{ category }}
		</el-col>
	</el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
import { Category } from '@/models/category';

@Component
export default class CategoryCard extends Vue {
	private category: Category | null = null;

	async created(): Promise<void> {
		await axios.get(`Category/${this.$route.params.id}`).then((response) => {
			if (response.status === 200) {
				this.category = response.data;
			}
		});
	}

	get dataLoaded(): boolean {
		return this.category !== null;
	}
}
</script>
