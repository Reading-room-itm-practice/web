import { AuthorSuggestion } from '@/models/suggestions/authorSuggestion'

export type AuthorState = {
  authors: Map<number, AuthorSuggestion>
}
