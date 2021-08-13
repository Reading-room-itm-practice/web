<template>
	<el-row>
		<el-col :span="12">
			<el-image :src="require('@/assets/logo.png')"></el-image>
		</el-col>
		<el-col :span="12">
			<h2>email@example.com</h2>
			<h4>Short bio or smthn</h4>
		</el-col>
	</el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProfileInfo extends Vue {}
</script>
