<template>
  <el-col>
    <el-row>
      <base-suggestion :suggestionType='name' v-on:completed-filtering='authors = $event'
      ></base-suggestion>
    </el-row>
    <el-row v-if='loadedUnapproved'>
      <base-listing :type="`Unapproved ${name}`">
        {{ authors.unapproved }}
      </base-listing>
    </el-row>
    <el-row v-if='loadedApproved'>
      <base-listing :type="`Approved ${name}`">
        {{ authors.approved }}
      </base-listing>
    </el-row>
  </el-col>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseListing from '@/components/listing/BaseListing.vue'
import BaseSuggestion from '@/components/BaseSuggestion.vue'
import BaseListElement from '@/components/listing/BaseListElement.vue'
import BookDisplay from '@/components/BookDisplay.vue'
import { Filtered } from '@/models/suggestions/filtered'
import { AuthorSuggestion } from '@/models/suggestions/authorSuggestion'

@Component({
  components: { BaseListing, BaseSuggestion, BaseListElement, BookDisplay }
})
export default class SuggestedAuthors extends BaseSuggestion {
  private authors: Filtered<AuthorSuggestion> = {
    approved: [],
    unapproved: []
  }

  get loadedApproved (): boolean {
    return this.authors.approved.length > 0
  }

  get loadedUnapproved (): boolean {
    return this.authors.unapproved.length > 0
  }
}
</script>
