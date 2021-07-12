<template>
  <el-row v-if="dataLoaded" :gutter='24'>
    <el-col class='book-bubble' :offset='8'>
      <rating-stars></rating-stars>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import RatingStars from '@/components/RatingStars.vue'

@Component({
  components: {
    RatingStars
  }
})
export default class BookRating extends Vue {
  get dataLoaded (): boolean {
    return true
  }
}
</script>
