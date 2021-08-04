<template>
  <el-select v-model='selectedAuthor'
             placeholder='Authors'
             filterable
             @change="$emit('author-selected', selectedAuthor)"
  >
    <el-option v-for='(author, index) in authors'
               :key='index'
               :value='author'
               :label='author.label'
                >
      {{ author.label }}
    </el-option>
  </el-select>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import { castSelect } from '@/helpers/castSelect'
import { Select } from 'element-ui'

@Component
export default class Authors extends Vue {
  private authors: Array<Select> | null = null
  private selectedAuthor: Select | null = null

  async created (): Promise<void> {
    const response = await axios.get('Authors')
    if (response) {
      this.authors = castSelect(response.data.content)
    }
  }
}
</script>
