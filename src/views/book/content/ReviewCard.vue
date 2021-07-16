<template>
  <el-col v-if="dataLoaded">
    asdas
  </el-col>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
import { Review } from '@/models/review'

@Component
export default class ReviewCard extends Vue {
  @Prop() readonly bookId
  private reviews: Array<Review> | null = null

  created (): Promise<void> {
    if (this.bookId) {
      axios.get('Review', {
        params: {
          bookId: this.bookId
        }
      }).then((response) => {
        console.log(response)
        if (response.status === 200) {
          this.reviews = response.data.content
        }
      })
    }
  }

  get dataLoaded (): boolean {
    return this.reviews !== null
  }
}
</script>
