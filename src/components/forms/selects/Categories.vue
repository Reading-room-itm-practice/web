<template>
  <el-select v-model='selectedCategory' placeholder='Categories' filterable allow-create>
    <el-option v-for='(category, index) in categories'
               :key='index'
               :value='{id: category.id, name: category.name}'
               :label='category.name'
    >
      {{ category.name }}
    </el-option>
  </el-select>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import { Category } from '@/models/category'

@Component
export default class Categories extends Vue {
  private categories: Array<Category> | null = null
  private selectedCategory: Category | null = null

  async created (): Promise<void> {
    const response = await axios.get('Category')
    if (response) {
      this.categories = response.data
    }
  }
}
</script>
