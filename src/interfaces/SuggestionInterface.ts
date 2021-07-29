import { Suggestion } from '@/models/suggestions/suggestion'

export interface SuggestionInterface {
  filterSuggestions(suggestions: Array<Suggestion>): void
}
