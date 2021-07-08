<template>
  <el-select v-model='selectedCategory' placeholder='Categories' filterable allow-create>
    <el-option v-for='(category, index) in categories'
               :key='index'
               :value='category.name'
               :label='category.name'
    >
      {{ category.name }}
    </el-option>
  </el-select>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import { Book } from '@/models/book'

@Component
export default class Categories extends Vue {
  private categories: Array<Book> = []
  private selectedCategory: Book = ''

  async created (): void {
    const response = await axios.get('Category')
    if (response) {
      this.categories = response.data
    }
  }
}
</script>
