import { BookSuggestion } from '@/models/suggestions/bookSuggestion'
import { CategorySuggestion } from '@/models/suggestions/categorySuggestion'
import { AuthorSuggestion } from '@/models/suggestions/authorSuggestion'

export interface SuggestionFormInterface {
  form: Array<BookSuggestion | CategorySuggestion | AuthorSuggestion>
}
