<template>
  <el-col v-if="dataLoaded">
    <single-review v-for='review in reviews'
            :key="'userId'+review.id"
            :id='review.id'
            :rating='review.stars'
            :comment='review.content'
    ></single-review>
  </el-col>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
import { Review } from '@/models/review'
import SingleReview from '@/views/book/content/Review.vue'

@Component({
  components: { SingleReview }
})
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
