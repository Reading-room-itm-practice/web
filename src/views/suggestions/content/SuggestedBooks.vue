<template>
  <el-col>
    <el-collapse v-model='active'>
      <el-row>
        <base-suggestion :suggestionType='name' v-on:completed-filtering='books = $event'
        ></base-suggestion>
      </el-row>
      <el-row v-if='loadedUnapproved'>
        <base-listing :type="`Unapproved ${name}`">
          <base-list-element :route='route' v-for='(book, index) in books.unapproved' :key='index' :record='book'>
            <el-collapse-item :title='book.title'>
              <book-listing :book='book'></book-listing>
            </el-collapse-item>
          </base-list-element>
        </base-listing>
      </el-row>
      <el-row v-if='loadedApproved'>
        <base-listing :type="`Approved ${name}`">
          <base-list-element :route='route' v-for='(book, index) in books.approved' :key='index' :record='book'>
            <el-collapse-item :title='book.title'>
              <book-listing :book='book'></book-listing>
            </el-collapse-item>
          </base-list-element>
        </base-listing>
      </el-row>
    </el-collapse>
  </el-col>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseSuggestion from '@/components/BaseSuggestion.vue'
import { Filtered } from '@/models/suggestions/filtered'
import BaseListing from '@/components/listing/BaseListing.vue'
import { BookSuggestion } from '@/models/suggestions/bookSuggestion'
import BookDisplay from '@/components/BookDisplay.vue'
import BaseListElement from '@/components/listing/BaseListElement.vue'
import BookListing from '@/components/listing/BookListing.vue'

@Component({
  components: { BaseListing, BaseSuggestion, BaseListElement, BookDisplay, BookListing }
})
export default class SuggestedBooks extends BaseSuggestion {
  private route = 'Books'
  private active: Array<string> = []
  private books: Filtered<BookSuggestion> = {
    approved: [],
    unapproved: []
  }

  get loadedApproved (): boolean {
    return this.books.approved.length > 0
  }

  get loadedUnapproved (): boolean {
    return this.books.unapproved.length > 0
  }
}
</script>
