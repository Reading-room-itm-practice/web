<template>
  <el-row v-if='dataLoaded'>
    <el-col>
      {{ author }}
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import { Author } from '@/models/author'

@Component
export default class AuthorCard extends Vue {
  private author: Author | null = null

  async created (): Promise<void> {
    await axios.get(`Authors/${this.$route.params.id}`).then((response) => {
      if (response.status === 200) {
        this.author = response.data
      }
    })
  }

  get dataLoaded (): boolean {
    return this.author !== null
  }
}
</script>
