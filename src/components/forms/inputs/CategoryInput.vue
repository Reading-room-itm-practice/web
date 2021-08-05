<template>
  <el-col class='suggestion'>
    <h2>
      <base-suggestion-form :data="form" v-on:form-validated="$emit('form-validated', $event.form, requestType)">
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
import { Requests } from '@/enums/Requests'

@Component({
  components: { BaseSuggestionForm }
})
export default class CategoryInput extends BaseSuggestionForm {
  @Prop(Object) readonly categoryToEdit: CategorySuggestion | undefined

  private requestType = Requests.POST
  private form = {
    name: ''
  }

  created (): void {
    if (this.categoryToEdit) {
      this.requestType = Requests.PUT
      this.form = this.categoryToEdit
    }
  }
}
</script>
