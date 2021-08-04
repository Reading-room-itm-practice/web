<template>
  <el-col class='suggestion'>
    <h2>
      <base-suggestion-form route-name="Authors" :data="form" v-on:form-validated="$emit('form-validated', $event)">
        <el-row>
          <el-col :span="8">Name</el-col>
          <el-col :span="16">
            <el-input v-model="form.name"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Biography</el-col>
          <el-col :span="16">
            <el-input type="textarea" v-model="form.biography"/>
          </el-col>
        </el-row>
      </base-suggestion-form>
    </h2>
  </el-col>
</template>

<script lang='ts'>

import { Component, Prop } from 'vue-property-decorator'
import BaseSuggestionForm from '@/components/forms/BaseSuggestionForm.vue'
import { AuthorSuggestion } from '@/models/suggestions/authorSuggestion'

@Component({
  components: { BaseSuggestionForm }
})
export default class AuthorInput extends BaseSuggestionForm {
  @Prop(Object) readonly author: AuthorSuggestion | undefined

  private form = this.author || {
    name: '',
    biography: ''
  }
}
</script>
