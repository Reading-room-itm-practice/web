<template>
  <el-col>
    <book-card></book-card>
    <book-rating></book-rating>
  </el-col>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import BookCard from './content/BookCard.vue'
import BookRating from '@/views/book/content/BookRating.vue'

@Component({
  components: { BookRating, BookCard }
})
export default class BookPage extends Vue {
}
</script>
