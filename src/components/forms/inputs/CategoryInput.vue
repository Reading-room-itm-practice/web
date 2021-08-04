<template>
  <el-col class='suggestion'>
    <h2>
      <base-suggestion-form route-name="Category" :data="form" v-on:form-validated="$emit('form-validated', $event)">
        <el-row>
          <el-col :span="8">Name</el-col>
          <el-col :span="16">
            <el-input v-model="form.name"/>
          </el-col>
        </el-row>
      </base-suggestion-form>
    </h2>
  </el-col>
</template>

<script lang='ts'>

import { Component, Prop } from 'vue-property-decorator'
import BaseSuggestionForm from '@/components/forms/BaseSuggestionForm.vue'
import { CategorySuggestion } from '@/models/suggestions/categorySuggestion'

@Component({
  components: { BaseSuggestionForm }
})
export default class CategoryInput extends BaseSuggestionForm {
  @Prop(Object) readonly category: Array<CategorySuggestion> | undefined

  private form = this.category || {
    name: ''
  }
}
</script>
