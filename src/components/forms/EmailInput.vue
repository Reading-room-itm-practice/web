<template>
  <el-input v-model='formInput' v-on:input="$emit('form-input', {
    type: 'email',
    body: formInput
  })"></el-input>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class EmailInput extends Vue {
  public formInput = ''
}
</script>
