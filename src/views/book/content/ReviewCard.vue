<template>
  <el-col v-if="dataLoaded">
    <single-review v-for='review in paginatedReviews'
            :key="'userId'+review.id"
            :id='review.id'
            :rating='review.stars'
            :comment='review.content'
    ></single-review>
    <el-pagination
      :page-size="perPage"
      layout="prev, pager, next"
      @current-change='changePage'
      :current-page ="currentPage"
      :total="reviews.length"
    ></el-pagination>
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
  @Prop(String) readonly bookId: string | undefined
  private reviews: Array<Review> | null = null
  private paginatedReviews: Array<Review> | undefined = []
  private currentPage = 1
  private perPage = 5

  async created (): Promise<void> {
    if (this.bookId) {
      await axios.get('Reviews', {
        params: {
          bookId: this.bookId
        }
      }).then((response) => {
        if (response.status === 200) {
          this.reviews = response.data.content
          this.changePage(1)
        }
      })
    }
  }

  private changePage (number: number): void {
    this.paginatedReviews = this.reviews?.slice((number - 1) * this.perPage, number * this.perPage)
    this.currentPage = number
  }

  get dataLoaded (): boolean {
    return this.reviews !== null
  }
}
</script>
