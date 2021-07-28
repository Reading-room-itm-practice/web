<template>
  <el-col>
    <div v-if='paginatedReviews'>
      <single-review v-for='review in paginatedReviews'
              :key="review.id"
              :id='review.id'
              :rating='review.stars'
              :comment='review.content'
      ></single-review>
    </div>
    <div v-if='dataLoaded'>
      <base-pagination :data-to-paginate='reviews' v-on:pagination-updated='paginationResult = $event'></base-pagination>
    </div>
  </el-col>
</template>

<script lang='ts'>
import { Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
import { Review } from '@/models/review'
import SingleReview from '@/views/book/content/Review.vue'
import BasePagination from '@/components/BasePagination.vue'

@Component({
  components: { BasePagination, SingleReview }
})
export default class ReviewCard extends BasePagination {
  @Prop(String) readonly bookId: string | undefined

  private reviews: Array<Review> | null = null
  private paginationResult: Array<Review> | null = null

  async created (): Promise<void> {
    if (this.bookId) {
      await axios.get('Reviews', {
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

  get paginatedReviews (): Array<Review> {
    return this.paginationResult
  }

  get dataLoaded (): boolean {
    return this.reviews !== null
  }
}
</script>
