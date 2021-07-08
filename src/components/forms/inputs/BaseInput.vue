<template>
  <el-input v-model='baseInput.body' v-on:input='emitBaseInput'></el-input>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { BaseInputInterface } from '@/interfaces/BaseInputInterface'

@Component
export default class BaseInput extends Vue {
  @Prop() readonly inputType: string
  public input = ''

  private baseInput: BaseInputInterface = {
    type: this.inputType,
    body: ''
  }

  public emitBaseInput (): void {
    this.$emit('base-input', this.baseInput)
  }

  public emitInput (event: BaseInputInterface): void {
    this.$emit('form-input', event)
  }
}
</script>
