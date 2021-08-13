<template>
	<admin-card></admin-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AdminCard from '@/views/admin/content/AdminCard.vue';

@Component({
	components: {
		AdminCard
	}
})
export default class AdminPage extends Vue {}
</script>
