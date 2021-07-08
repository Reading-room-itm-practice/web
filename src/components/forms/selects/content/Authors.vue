<template>
  <el-select v-model='selectedAuthor' placeholder='Authors' filterable allow-create>
    <el-option v-for='(author, index) in authors'
               :key='index'
               :value='author.name'
               :label='author.name'
                >
      {{ author.name }}
    </el-option>
  </el-select>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Authors extends Vue {
  private authors = []
  private selectedAuthor = ''

  async created (): void {
    const response = await axios.get('Authors')
    if (response) {
      this.authors = response.data
    }
  }
}
</script>
