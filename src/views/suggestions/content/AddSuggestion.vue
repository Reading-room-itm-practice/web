<template>
  <el-col :offset='8'>
    <el-collapse v-model="activeSuggestionType" accordion>
      <el-collapse-item title="Book">
        <book-input v-on:form-validated='sendSuggestionForm'/>
      </el-collapse-item>
      <el-collapse-item title="Author">
        <author-input v-on:form-validated='sendSuggestionForm'/>
      </el-collapse-item>
      <el-collapse-item title="Category">
        <category-input v-on:form-validated='sendSuggestionForm'/>
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

@Component({
  components: { BookInput, AuthorInput, CategoryInput }
})
export default class AddSuggestion extends Vue {
  private activeSuggestionType = []

  private async sendSuggestionForm (event): Promise<void> {
    console.log(event)
    if (this.isAdmin) event.form.approved = true
    await axios.post(`${this.getRouteModifier}${event.route}`, event.form).then((response) => {
      if (response.status === 201) {
        Vue.notify(new SuccessNotification(response.data.message))
      }
    })
  }

  @Getter [UserStoreMethods.getRouteModifier]
  @Getter [UserStoreMethods.isAdmin]
}
</script>
