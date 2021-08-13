<template>
	<reset-password-card></reset-password-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ResetPasswordCard from '@/views/reset_password/content/ResetPasswordCard.vue';

@Component({
	components: {
		ResetPasswordCard
	}
})
export default class ResetPasswordPage extends Vue {}
</script>
