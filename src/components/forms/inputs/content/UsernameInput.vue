<template>
  <base-input v-on:base-input=emitInput($event) input-type='username'></base-input>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseInput from '@/components/forms/inputs/BaseInput.vue'

@Component({
  components: { BaseInput }
})
export default class UsernameInput extends BaseInput {
}
</script>
