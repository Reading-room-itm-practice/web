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
        <el-col :span="8">Biography</el-col>
        <el-col :span="16">
          <el-input type="textarea" v-model="form.bio"/>
        </el-col>
      </el-row>
      <el-row>
        <el-image :src="require('@/assets/plus.png')" @click="sendForm" class='add-image'></el-image>
      </el-row>
    </h2>
  </el-col>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
@Component
export default class AuthorInput extends Vue {
  private form = {
    name: '',
    bio: ''
  }

  private sendForm (): void {
    console.log(this.form)
  }
}
</script>
