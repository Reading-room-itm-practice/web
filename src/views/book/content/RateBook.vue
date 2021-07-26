<template>
  <el-row :gutter='24' class='rate-book'>
    <el-col>
      <el-form>
          <rating-stars v-on:rated='reviewForm.stars = $event'></rating-stars>
          <el-input type='textarea' autosize v-model='reviewForm.content'></el-input>
          <el-button @click='sendReview'>{{ $t('book.add') }}</el-button>
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
export default class RateBook extends Vue {
  @Prop() readonly bookId
  private reviewForm: Review = {
    bookId: this.bookId,
    stars: 0,
    content: ''
  }

  private async sendReview (): Promise<void> {
    if (this.reviewForm && this.reviewForm.stars > 0) {
      await axios.post('Reviews', { ...this.reviewForm }).then((response) => {
        if (response.status === 201) {
          Vue.notify(new SuccessNotification(this.$t('success.rating')))
        }
      })
    } else {
      Vue.notify(new ErrorNotification(this.$t('errors.default')))
    }
  }
}
</script>

<style scoped>
.rate-book {
  padding: 20px;
}
</style>
