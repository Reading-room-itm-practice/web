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
      layout="sizes, prev, pager, next"
      @current-change='changePage'
      @size-change="changePerPage"
      :current-page ="currentPage"
      :total="reviews.length"
      :page-sizes="[5, 10, 15]"
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
  private paginatedReviews: Array<Review> | undefined = undefined
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
    this.currentPage = number
    this.updatePagination()
  }

  private changePerPage (pageSize: number): void {
    this.perPage = pageSize
    this.updatePagination()
  }

  private updatePagination (): void {
    this.paginatedReviews = this.reviews?.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
  }

  get dataLoaded (): boolean {
    return this.reviews !== null
  }
}
</script>
