<template>
  <el-row>
    <el-col>

    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Review extends Vue {
  @Prop() readonly id
  @Prop() readonly rating
  @Prop() readonly content

  created (): void {

  }
}
</script>
