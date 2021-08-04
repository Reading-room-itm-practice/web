<template>
  <div v-if="isDataLoaded">
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
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
import { castSelect } from '@/helpers/castSelect'
import { Select } from 'element-ui'

@Component
export default class Authors extends Vue {
  @Prop(Number) readonly selectedAuthorId: number | undefined

  private authors: Array<Select> | null = null
  private selectedAuthor: Select | null = null

  async created (): Promise<void> {
    const response = await axios.get('Authors')
    if (response) {
      this.authors = castSelect(response.data.content)
    }
    if (this.selectedAuthorId) this.selectedAuthor = this.authors.find((author) => parseInt(author.value) === this.selectedAuthorId)
  }

  get isDataLoaded (): boolean {
    return this.authors !== null
  }
}
</script>
