<template>
  <el-col class='suggestion'>
    <h2>
      <base-suggestion-form type="Authors" :data="form" v-on:form-validated="$emit('form-validated', $event)">
      <el-row>
        <el-col :span="8">Title</el-col>
        <el-col :span="16">
          <el-input v-model="form.title"/>
        </el-col>
      </el-row>
        <el-row>
          <el-col :span="8">Release Year</el-col>
          <el-col :span="16">
            <el-input v-model="form.releaseYear"/>
          </el-col>
        </el-row>
      <el-row>
        <el-col :span="8">Author</el-col>
        <el-col :span="16">
          <authors v-on:author-selected="form.authorId = $event.id"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Category</el-col>
        <el-col :span="16">
          <categories v-on:category-selected="form.categoryId = $event.id"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Description</el-col>
        <el-col :span="16">
          <el-input type="textarea" v-model="form.description"/>
        </el-col>
      </el-row>
      </base-suggestion-form>
    </h2>
  </el-col>
</template>

<script lang='ts'>

import { Component } from 'vue-property-decorator'
import Authors from '@/components/forms/selects/Authors.vue'
import Categories from '@/components/forms/selects/Categories.vue'
import BaseSuggestionForm from '@/components/forms/BaseSuggestionForm.vue'

@Component({
  components: { BaseSuggestionForm, Categories, Authors }
})
export default class BookInput extends BaseSuggestionForm {
  private form = {
    title: '',
    authorId: 0,
    categoryId: 0,
    photosId: [0],
    mainPhotoId: 0,
    releaseYear: '',
    description: ''
  }
}
</script>
