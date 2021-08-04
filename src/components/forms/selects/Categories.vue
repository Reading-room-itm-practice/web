<template>
  <el-select v-model='selectedCategory'
             placeholder='Categories'
             filterable
             @change="$emit('category-selected', selectedCategory)"
  >
    <el-option v-for='(category, index) in categories'
               :key='index'
               :value='category'
               :label='category.label'
    >
      {{ category.label }}
    </el-option>
  </el-select>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import { castSelect } from '@/helpers/castSelect'
import { Select } from 'element-ui'

@Component
export default class Categories extends Vue {
  private categories: Array<Select> | null = null
  private selectedCategory: Select | null = null

  async created (): Promise<void> {
    const response = await axios.get('Category')
    if (response) {
      this.categories = castSelect(response.data.content)
    }
  }
}
</script>
