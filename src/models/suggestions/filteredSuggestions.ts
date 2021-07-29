import { AuthorFiltered } from '@/models/suggestions/authorFiltered'
import { BookFiltered } from '@/models/suggestions/bookFiltered'
import { CategoryFiltered } from '@/models/suggestions/categoryFiltered'

export type FilteredSuggestions = {
  approved: Array<BookFiltered | CategoryFiltered | AuthorFiltered>,
  unapproved: Array<BookFiltered | CategoryFiltered | AuthorFiltered>
}
