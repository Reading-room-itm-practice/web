import { Suggestion } from '@/models/suggestion'

export interface SuggestionInterface {
  filterSuggestions(suggestions: Array<Suggestion>): void
}
