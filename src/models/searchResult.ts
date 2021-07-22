import { Author } from '@/models/author'
import { Book } from '@/models/book'
import { Category } from '@/models/category'
import { User } from '@/models/user'

export type SearchResult = {
  Author: Author,
  Book: Book,
  Category: Category,
  User: User
}
