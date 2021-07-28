<template>
  <div></div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Suggestion } from '@/models/suggestion'
import axios from 'axios'
import { Book } from '@/models/book'

@Component
export default class SearchPage extends Vue {
  @Prop(Array) readonly data: Array<Suggestion>
  @Prop(String) readonly suggestionType: string

  private approvedBooks: Array<Book> | null = []
  private unapprovedBooks: Array<Book> | null = []

  created (): Promise<void> {
    console.log(this.suggestionType)
    if (this.suggestionType) {
      axios.get(`Admin${this.suggestionType}`).then((response) => {
        const adminBooks = response.data.content
        adminBooks.filter((book) => {
          if (book.approved) return this.approvedBooks?.push(book)
          else return this.unapprovedBooks?.push(book)
        })
      })
    }
  }
}
</script>
