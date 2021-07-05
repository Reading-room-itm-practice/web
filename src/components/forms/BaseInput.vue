<template>
  <el-input v-model='input' v-on:input='emitBaseInput'></el-input>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseInput extends Vue {
  public input = ''
  @Prop() readonly inputType: string

  public emitBaseInput (): void {
    this.$emit('base-input', {
      type: this.inputType,
      body: this.input
    })
  }

  public emitInput (event): void {
    this.$emit('form-input', event)
  }
}
</script>
