<template>
  <el-col>
    <el-collapse v-model='active'>
      <el-row>
        <base-suggestion :suggestionType='route' v-on:completed-filtering='categories = $event'
        ></base-suggestion>
      </el-row>
      <el-row v-if='loadedUnapproved'>
        <base-listing :type="`Unapproved ${name}`">
          <base-list-element :route='route' v-for='(category, index) in categories.unapproved' :key='index' :record='category'>
            <el-collapse-item :title='category.name'>
              <h2>{{ category.name }}</h2>
            </el-collapse-item>
          </base-list-element>
        </base-listing>
      </el-row>
      <el-row v-if='loadedApproved'>
        <base-listing :type="`Approved ${name}`">
          <base-list-element :route='route' v-for='(category, index) in categories.approved' :key='index' :record='category'>
            <el-collapse-item :title='category.name'>
              <h2>{{ category.name }}</h2>
            </el-collapse-item>
          </base-list-element>
        </base-listing>
      </el-row>
    </el-collapse>
  </el-col>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseListing from '@/components/listing/BaseListing.vue'
import BaseSuggestion from '@/components/BaseSuggestion.vue'
import BaseListElement from '@/components/listing/BaseListElement.vue'
import { Filtered } from '@/models/suggestions/filtered'
import { CategorySuggestion } from '@/models/suggestions/categorySuggestion'

@Component({
  components: { BaseListing, BaseSuggestion, BaseListElement }
})
export default class SuggestedCategories extends BaseSuggestion {
  private route = 'Category'
  private active: Array<string> = []
  private categories: Filtered<CategorySuggestion> = {
    approved: [],
    unapproved: []
  }

  get loadedApproved (): boolean {
    return this.categories.approved.length > 0
  }

  get loadedUnapproved (): boolean {
    return this.categories.unapproved.length > 0
  }
}
</script>
