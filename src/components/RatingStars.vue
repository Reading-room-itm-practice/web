<template>
  <div>
    <el-image class='star' v-for='(star, index) in stars'
              :src="star.imagePath"
              :key='index'
              @click='rate(index+1, star.isRated)'
    ></el-image>
    <notifications group='rating' position='bottom center' classes='notification'/>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { Star } from '@/models/star'

@Component
export default class RatingStars extends Vue {
  private stars: Array<Star> = []
  private baseStarImagePath: string = require('@/assets/star_empty.png')

  created (): void {
    this.drawStars()
  }

  private drawStars (): void {
    for (let i = 1; i <= 5; i++) {
      const star: Star = {
        imagePath: this.baseStarImagePath,
        isRated: false
      }
      this.stars.push(star)
    }
  }

  private rate (rating: number, isRated: boolean): void {
    if (isRated) {
      this.removeRating()
    } else {
      this.applyRating(rating)
    }
    Vue.notify(this.$t('rating.stars'))
  }

  private removeRating (): void {
    for (let i = 0; i < 5; i++) {
      this.stars[i].imagePath = require('@/assets/star_empty.png')
      this.stars[i].isRated = false
    }
  }

  private applyRating (rating: number): void {
    for (let i = 0; i < rating; i++) {
      this.stars[i].imagePath = require('@/assets/star_full.png')
      this.stars[i].isRated = true
    }
  }
}
</script>
