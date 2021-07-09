<template>
  <book-card></book-card>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import BookCard from './content/BookCard.vue'

@Component({
  components: { BookCard }
})
export default class BookPage extends Vue {
}
</script>
