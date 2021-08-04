<template>
  <div v-if="isDataLoaded">
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
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
import { castSelect } from '@/helpers/castSelect'
import { Select } from 'element-ui'

@Component
export default class Categories extends Vue {
  @Prop(Number) readonly id: string | number | undefined

  private categories: Array<Select> | null = null
  private selectedCategory: Select | null = null

  async created (): Promise<void> {
    const response = await axios.get('Category')
    if (response) {
      this.categories = castSelect(response.data.content)
      if (this.id) this.selectedCategory = this.categories.find((category) => parseInt(category.value) === this.id)
    }
  }

  get isDataLoaded (): boolean {
    return this.categories !== null
  }
}
</script>
