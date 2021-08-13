<template>
	<div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import axios from 'axios';
import { BasicResource } from '@/models/resourceBasic';

@Component
export default class SearchCard extends Vue {
	private searchType = this.$route.params.type;

	private searchString = this.$route.params.input;

	async created(): Promise<void> {
		await this.fetchResources();
	}

	private async fetchResources(): Promise<void> {
		await axios
			.get(`Search${this.searchType}`, {
				params: {
					searchString: this.searchString
				}
			})
			.then((response) => {
				const data = this.getDataFromResponse(response.data.content);
				if (response.status === 200 && data) {
					this.$router.push({
						name: 'SearchResult',
						params: {
							data
						}
					});
				}
			});
	}

	private getDataFromResponse(responseData: Array<BasicResource>): Array<BasicResource> {
		return responseData;
	}

	private getResourceType(): string {
		return this.searchType.split('/')[1];
	}
}
</script>
