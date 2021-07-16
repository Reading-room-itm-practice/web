<template>
  <div>
    <el-image class='star' v-for='(star, index) in stars'
              :src="star.imagePath"
              :key='index'
              @click='ratingSelected(index+1, star.isRated)'
    ></el-image>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { Star } from '@/models/star'

@Component
export default class RatingStars extends Vue {
  private stars: Array<Star> = []
  private baseStarImagePath: string = require('@/assets/star_empty.png')
  public rating: number | null = null

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

  private ratingSelected (rating: number, isRated: boolean): void {
    this.rating = rating
    if (this.rating > 0 && this.rating < 11) {
      if (isRated) {
        this.emptyStars()
      } else {
        this.fillStars()
      }
      this.$emit('rated', this.rating)
    }
  }

  private emptyStars (): void {
    this.rating = 0
    for (let i = 0; i < 5; i++) {
      this.stars[i].imagePath = require('@/assets/star_empty.png')
      this.stars[i].isRated = false
    }
  }

  private fillStars (): void {
    for (let i = 0; i < this.rating; i++) {
      this.stars[i].imagePath = require('@/assets/star_full.png')
      this.stars[i].isRated = true
    }
  }
}
</script>
