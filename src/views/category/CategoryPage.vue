<template>
	<category-card></category-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CategoryCard from '@/views/category/content/CategoryCard.vue';

@Component({
	components: {
		CategoryCard
	}
})
export default class CategoryPage extends Vue {}
</script>
