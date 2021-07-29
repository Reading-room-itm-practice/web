<template>
  <el-col>
    <el-row>
      <base-suggestion :suggestionType='name' v-on:completed-filtering='assignToBooks($event)'
      ></base-suggestion>
    </el-row>
    <el-row v-if='loadedUnapproved'>
      <base-listing :data='unapprovedBooks' :type="`Approved ${name}`"></base-listing>
    </el-row>
    <el-row v-if='loadedApproved'>
      <base-listing :data='approvedBooks' :type="`Unapproved ${name}`"></base-listing>
    </el-row>
  </el-col>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseSuggestion from '@/components/BaseSuggestion.vue'
import { Filtered } from '@/models/suggestions/filtered'
import BaseListing from '@/components/listing/BaseListing.vue'
import { BookSuggestion } from '@/models/suggestions/bookSuggestion'

@Component({
  components: { BaseListing, BaseSuggestion }
})
export default class SuggestedBooks extends BaseSuggestion {
  private approvedBooks: Array<BookSuggestion> = []
  private unapprovedBooks: Array<BookSuggestion> = []

  private assignToBooks (books: Filtered<BookSuggestion>): void {
    this.approvedBooks = books.approved
    this.unapprovedBooks = books.unapproved
  }

  get loadedApproved (): boolean {
    return this.approvedBooks.length > 0
  }

  get loadedUnapproved (): boolean {
    return this.unapprovedBooks.length > 0
  }
}
</script>
