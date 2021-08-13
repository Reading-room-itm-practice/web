<template>
	<el-select v-model="selectedAuthor" placeholder="Authors" filterable allow-create>
		<el-option v-for="(author, index) in authors" :key="index" :value="author" :label="author.name">
			{{ author.name }}
		</el-option>
	</el-select>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
import { Author } from '@/models/author';

@Component
export default class Authors extends Vue {
	private authors: Array<Author> | null = null;

	private selectedAuthor: Author | null = null;

	async created(): Promise<void> {
		const response = await axios.get('Authors');
		if (response) {
			this.authors = response.data;
		}
	}
}
</script>
