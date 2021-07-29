<template>
  <div></div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
import { SuggestionInterface } from '@/interfaces/SuggestionInterface'
import { FilteredSuggestions } from '@/models/suggestions/filteredSuggestions'
import { Suggestion } from '@/models/suggestions/suggestion'

@Component
export default class BaseSuggestion extends Vue implements SuggestionInterface {
  @Prop(String) readonly suggestionType: string | undefined

  private data: Array<Suggestion> | null = null
  private suggestions: FilteredSuggestions = {
    approved: [],
    unapproved: []
  }

  async created (): Promise<void> {
    await this.getSuggestions()
    this.filterSuggestions()
  }

  private async getSuggestions (): Promise<void> {
    if (this.suggestionType) {
      await axios.get(`Admin${this.suggestionType}`).then((response) => {
        this.data = response.data.content
      })
    }
  }

  get name (): string {
    let tag = this.$options._componentTag.split('-')[1]
    tag = tag.charAt(0).toUpperCase() + tag.slice(1)
    return tag
  }

  public filterSuggestions (): void {
    this.data.filter((suggestion) => {
      if (suggestion.approved) return this.suggestions.approved.push(suggestion)
      else return this.suggestions.unapproved.push(suggestion)
    })
    this.$emit('completed-filtering', this.suggestions)
  }
}
</script>
