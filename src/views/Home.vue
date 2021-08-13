<template>
	<div class="home">
		<img alt="Vue logo" src="@/assets/logo.png" />
		<h1>{{ $t('homepage.header') }}</h1>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
