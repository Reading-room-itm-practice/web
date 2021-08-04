<template>
  <el-row :gutter='24'>
    <el-col :span='18' class='list-element'>
      <slot></slot>
    </el-col>
    <el-col :span='6'>
      <el-button v-if='record.approved' type="success" icon="el-icon-check" @click='approve' circle></el-button>
      <el-button v-if='!record.approved' type="success" icon="el-icon-check" @click='approve' circle plain></el-button>
      <el-button type="primary" icon="el-icon-edit" @click='edit' circle></el-button>
      <el-button type="danger" icon="el-icon-delete" @click='eradicate' circle></el-button>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { CategorySuggestion } from '@/models/suggestions/categorySuggestion'
import { BookSuggestion } from '@/models/suggestions/bookSuggestion'
import { AuthorSuggestion } from '@/models/suggestions/authorSuggestion'
import axios from 'axios'
import { SuccessNotification } from '@/notifications/success'

@Component
export default class BaseListElement extends Vue {
  @Prop(Object) readonly record: BookSuggestion | CategorySuggestion | AuthorSuggestion | undefined
  @Prop(String) readonly route: string | undefined

  private async approve (): Promise<void> {
    this.record?.approved = !this.record?.approved
    await axios.put(`Admin${this.route}/${this.record?.id}`, this.record).then((response) => {
      if (response.status === 200) {
        Vue.notify(new SuccessNotification(response.data.message))
      }
    })
  }

  private edit (): Promise<void> {
    this.$router.push({
      name: 'AddSuggestion',
      params: {
        form: this.record,
        routeName: this.route,
        tabToEdit: this.route
      }
    })
  }

  private async eradicate (): Promise<void> {
    await axios.delete(`Admin${this.route}/${this.record?.id}`).then((response) => {
      if (response.status === 200) {
        Vue.notify(new SuccessNotification(response.data.message))
      }
    })
  }
}
</script>
