<template>
  <el-col class='suggestion'>
    <h2>
      <el-row>
        <el-col :span="8">Name</el-col>
        <el-col :span="16">
          <el-input v-model="form.name"/>
        </el-col>
      </el-row>
      <el-row>
      </el-row>
      <el-row>
        <el-image :src="require('@/assets/plus.png')" @click="$emit('form-validated', form, type)" class='add-image'></el-image>
      </el-row>
    </h2>
  </el-col>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
@Component
export default class CategoryInput extends Vue {
  private type = 'Category'
  private form = {
    name: ''
  }
}
</script>
