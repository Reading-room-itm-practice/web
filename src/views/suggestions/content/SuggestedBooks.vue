<template>
  <el-col>
    <el-row>
      <base-suggestion :suggestionType='name' v-on:got-suggestions='filterBooks($event)'></base-suggestion>
    </el-row>
    <el-row v-if='unapprovedBooks'>
      <base-listing :data='unapprovedBooks' :type="`Approved ${name}`"></base-listing>
    </el-row>
    <el-row v-if='approvedBooks'>
      <base-listing :data='approvedBooks' :type="`Unapproved ${name}`"></base-listing>
    </el-row>
  </el-col>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseSuggestion from '@/components/BaseSuggestion.vue'
import { Book } from '@/models/book'
import BaseListing from '@/components/BaseListing.vue'
@Component({
  components: { BaseListing, BaseSuggestion }
})
export default class SuggestedBooks extends BaseSuggestion {
  private approvedBooks: Array<Book> = []
  private unapprovedBooks: Array<Book> = []

  private filterBooks (books: Array<Book>): void {
    books.filter((book) => {
      if (book.approved) return this.approvedBooks.push(book)
      else return this.unapprovedBooks.push(book)
    })
  }
}
</script>
