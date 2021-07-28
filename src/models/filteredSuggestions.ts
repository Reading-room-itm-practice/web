import { Book } from '@/models/book'
import { Category } from '@/models/category'
import { Author } from '@/models/author'

export type FilteredSuggestions = {
  approved: Array<Book | Category | Author>,
  unapproved: Array<Book | Category | Author>
}
