<template>
  <el-row v-if="dataLoaded" :gutter='24'>
    <el-col>
      <el-form>
          <rating-stars v-on:rated='reviewForm.stars = $event'></rating-stars>
          <el-input type='textarea' v-model='reviewForm.content'></el-input>
          <el-button @click='sendReview'>Send</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import RatingStars from '@/components/RatingStars.vue'
import axios from 'axios'
import { Review } from '@/models/review'
import { ErrorNotification } from '@/notifications/error'
import { SuccessNotification } from '@/notifications/success'

@Component({
  components: {
    RatingStars
  }
})
export default class BookRating extends Vue {
  @Prop() readonly bookId
  private reviewForm: Review = {
    bookId: this.bookId,
    stars: 0,
    content: ''
  }

  private async sendReview (): Promise<void> {
    if (this.reviewForm && this.reviewForm.stars > 1) {
      await axios.post('Review', { ...this.reviewForm }).then((response) => {
        if (response.status === 201) {
          Vue.notify(new SuccessNotification(this.$t('success.rating')))
        }
      })
    } else {
      Vue.notify(new ErrorNotification(this.$t('errors.default')))
    }
  }

  get dataLoaded (): boolean {
    return true
  }
}
</script>
