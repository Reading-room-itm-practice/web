<template>
  <div>
    <slot></slot>
    <el-image :src="require('@/assets/plus.png')" @click="validate" class='add-image'></el-image>
  </div>
</template>

<script lang='ts'>

import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseSuggestionForm extends Vue {
  @Prop(String) readonly type: string | undefined
  @Prop(Object) readonly data: any | undefined

  private validate (): void {
    if (this.data) {
      this.$emit('form-validated', {
        form: this.data,
        route: this.type
      })
    }
  }
}
</script>
