<template>
  <el-col :offset='8'>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Book" name="Books">
        <book-input v-on:form-validated='sendSuggestionForm' :book="$route.params.Books"/>
      </el-collapse-item>
      <el-collapse-item title="Author" name="Authors">
        <author-input v-on:form-validated='sendSuggestionForm' :author="$route.params.Authors"/>
      </el-collapse-item>
      <el-collapse-item title="Category" name="Category">
        <category-input v-on:form-validated='sendSuggestionForm' :category="$route.params.Category"/>
      </el-collapse-item>
    </el-collapse>
  </el-col>
</template>

<script lang='ts'>

import { Vue, Component, Prop } from 'vue-property-decorator'
import BookInput from '@/components/forms/inputs/BookInput.vue'
import AuthorInput from '@/components/forms/inputs/AuthorInput.vue'
import CategoryInput from '@/components/forms/inputs/CategoryInput.vue'
import axios from 'axios'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { Getter } from 'vuex-class'
import { SuccessNotification } from '@/notifications/success'
import { SuggestionForm } from '@/models/suggestions/form'

@Component({
  components: { BookInput, AuthorInput, CategoryInput }
})
export default class AddSuggestion extends Vue {
  @Prop(String) readonly activeTab: string | undefined

  activeName = this.$route.params.activeTab || ''

  private async sendSuggestionForm (event: SuggestionForm): Promise<void> {
    if (this.isAdmin) event.form.approved = true
    await axios.post(`${this.getRouteModifier}${event.routeName}`, event.form).then((response) => {
      if (response.status === 201) {
        Vue.notify(new SuccessNotification(response.data.message))
      }
    })
  }

  @Getter [UserStoreMethods.getRouteModifier]: string
  @Getter [UserStoreMethods.isAdmin]: string
}
</script>
