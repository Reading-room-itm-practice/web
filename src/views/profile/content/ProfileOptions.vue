<template>
  <h2>
    <el-row>
      <el-col :span='12'>
          Change avatar
      </el-col>
      <el-col :span='12'>
        Change Password
      </el-col>
    </el-row>
  </h2>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProfileOptions extends Vue {
}
</script>
