<template>
  <el-col :offset='8'>
    <el-collapse v-model="activeTabName" accordion>
      <el-collapse-item title="Book" name="Books">
        <book-input v-on:form-validated='sendSuggestionForm' :book-to-edit="$route.params.form"/>
      </el-collapse-item>
      <el-collapse-item title="Author" name="Authors">
        <author-input v-on:form-validated='sendSuggestionForm' :author-to-edit="$route.params.form"/>
      </el-collapse-item>
      <el-collapse-item title="Category" name="Category">
        <category-input v-on:form-validated='sendSuggestionForm' :category-to-edit="$route.params.form"/>
      </el-collapse-item>
    </el-collapse>
  </el-col>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
import BookInput from '@/components/forms/inputs/BookInput.vue'
import AuthorInput from '@/components/forms/inputs/AuthorInput.vue'
import CategoryInput from '@/components/forms/inputs/CategoryInput.vue'
import axios from 'axios'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { Getter } from 'vuex-class'
import { SuccessNotification } from '@/notifications/success'
import { SuggestionFormInterface } from '@/interfaces/SuggestionForm'
import { Requests } from '@/enums/Requests'

@Component({
  components: { BookInput, AuthorInput, CategoryInput }
})
export default class AddSuggestion extends Vue {
  private activeTabName = this.$route.params.tabToEdit || ''

  private async sendSuggestionForm (form: SuggestionFormInterface, requestType?: string): Promise<void> {
    console.log(form)
    if (requestType === Requests.PUT) {
      await this.updateSuggestionForm(this.$route.params.form)
    } else {
      await this.createSuggestionForm(form)
    }
  }

  private async createSuggestionForm (form: SuggestionFormInterface): Promise<void> {
    if (this.isAdmin) form.approved = true
    await axios.post(`${this.getRouteModifier}${this.activeTabName}`, form).then((response) => {
      if (response.status === 201) {
        Vue.notify(new SuccessNotification(response.data.message))
      }
    })
  }

  private async updateSuggestionForm (form: SuggestionFormInterface): Promise<void> {
    await axios.put(`${this.getRouteModifier}${this.activeTabName}/${form.id}`, form).then((response) => {
      if (response.status === 200) {
        Vue.notify(new SuccessNotification(response.data.message))
      }
    })
  }

  @Getter [UserStoreMethods.getRouteModifier]: string
  @Getter [UserStoreMethods.isAdmin]: string
}
</script>
