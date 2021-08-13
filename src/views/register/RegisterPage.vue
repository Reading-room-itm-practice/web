<template>
	<register-card></register-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import RegisterCard from '@/views/register/content/RegisterCard.vue';

@Component({
	components: {
		RegisterCard
	}
})
export default class RegisterPage extends Vue {}
</script>
