<template>
  <el-col class='suggestion'>
    <h2>
      <base-suggestion-form route-name="Books" :data="form" v-on:form-validated="$emit('form-validated', $event.form)">
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
          <el-col :span="8">Select main photo</el-col>
          <el-col :span="16">
            <el-upload
              class="avatar-uploader"
              :action='`https://localhost:44381/api/Photo?id=2&type=2`'
              :file-list="imageList"
              :on-change="handleChange"
              :on-success="success"
              :on-error="error"
              :auto-upload='false'
              :before-upload="beforeAvatarUpload"
              key="image"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
        </el-row>
      <el-row>
        <el-col :span="8">Author</el-col>
        <el-col :span="16">
          <authors v-model="form.authorId" :selected-author-id="form.authorId" v-on:author-selected="form.authorId = $event.value"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Category</el-col>
        <el-col :span="16">
          <categories v-model="form.categoryId" :selected-category-id="form.categoryId"  v-on:category-selected="form.categoryId = $event.value"/>
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

import { Component, Prop } from 'vue-property-decorator'
import Authors from '@/components/forms/selects/Authors.vue'
import Categories from '@/components/forms/selects/Categories.vue'
import BaseSuggestionForm from '@/components/forms/BaseSuggestionForm.vue'
import { BookSuggestion } from '@/models/suggestions/bookSuggestion'
import { Requests } from '@/enums/Requests'
import axios from 'axios'

@Component({
  components: { BaseSuggestionForm, Categories, Authors }
})
export default class BookInput extends BaseSuggestionForm {
  @Prop(Object) readonly bookToEdit: Array<BookSuggestion> | undefined

  private requestType = Requests.POST
  private imageUrl = null
  private imageList = []
  private form = {
    title: '',
    authorId: 0,
    categoryId: 0,
    photosId: [0],
    mainPhotoId: 0,
    releaseYear: '',
    description: ''
  }

  created (): void {
    if (this.bookToEdit) {
      this.requestType = Requests.PUT
      this.form = this.bookToEdit
    }
  }

  private handleChange (file) {
    this.imageUrl = URL.createObjectURL(file.raw)
    const form = new FormData()
    form.append('image', file.raw)
    axios.post('Photo?id=2&type=2', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      console.log(response)
      this.form.mainPhotoId = response.data.content.id
    })
  }
}
</script>
