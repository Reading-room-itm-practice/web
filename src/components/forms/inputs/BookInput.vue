<template>
  <el-col class='suggestion'>
    <h2>
      <el-row>
        <el-col :span="8">Title</el-col>
        <el-col :span="16">
          <el-input v-model="form.title"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Author</el-col>
        <el-col :span="16">
          <authors v-on:author-selected="form.author = $event"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Category</el-col>
        <el-col :span="16">
          <categories v-on:category-selected="form.category = $event"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Description</el-col>
        <el-col :span="16">
          <el-input type="textarea" v-model="form.description"/>
        </el-col>
      </el-row>
      <el-row>
        <el-image :src="require('@/assets/plus.png')" @click="$emit('form-validated', form, type)" class='add-image'></el-image>
      </el-row>
    </h2>
  </el-col>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
import Authors from '@/components/forms/selects/Authors.vue'
import Categories from '@/components/forms/selects/Categories.vue'
@Component({
  components: { Categories, Authors }
})
export default class BookInput extends Vue {
  private type = 'Books'
  private form = {
    title: '',
    author: '',
    category: '',
    description: ''
  }
}
</script>
