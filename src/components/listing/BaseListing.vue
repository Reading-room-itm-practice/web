<template>
  <el-row>
    <el-col>
      <h2>{{ type }}</h2>
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseListing extends Vue {
  @Prop(String) readonly type: string | undefined
}
</script>
