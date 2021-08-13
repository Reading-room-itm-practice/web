<template>
	<h2>
		<el-row>
			<el-col>
				{{ $t('profile.followers') }}
			</el-col>
		</el-row>
		<hr />
		<el-row>
			{{ $t('profile.friends') }}
		</el-row>
		<hr />
		<el-row>
			{{ $t('profile.favourites') }}
		</el-row>
	</h2>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProfileSocial extends Vue {}
</script>
