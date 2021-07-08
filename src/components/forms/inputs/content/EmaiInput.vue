<template>
  <base-input v-on:base-input='emitInput($event)' input-type='email'></base-input>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseInput from '@/components/forms/inputs/BaseInput.vue'

@Component({
  components: { BaseInput }
})
export default class EmailInput extends BaseInput {
}
</script>
