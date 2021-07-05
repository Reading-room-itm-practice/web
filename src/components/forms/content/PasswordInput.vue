<template>
  <base-input v-on:base-input='emitInput($event)' input-type='password'></base-input>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseInput from '@/components/forms/BaseInput.vue'

@Component({
  components: { BaseInput }
})
export default class PasswordInput extends BaseInput {
}
</script>
