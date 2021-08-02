<template>
  <el-row v-if="dataLoaded" >
    <el-col>
      <el-col>
        <book-display :book="book"
                      :author="author"
                      :category="category"
        ></book-display>
      </el-col>
    </el-col>
    <el-col>
      <el-row>
        <rate-book :book-id='book.id'></rate-book>
      </el-row>
      <hr>
      <el-row>
        <h1>{{ $t('book.review') }}</h1>
        <review-card :book-id='book.id'></review-card>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
import RateBook from '@/views/book/content/RateBook.vue'
import ReviewCard from '@/views/book/content/ReviewCard.vue'
import BookDisplay from '@/components/BookDisplay.vue'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { Getter } from 'vuex-class'
import { BookSuggestion } from '@/models/suggestions/bookSuggestion'
import { AuthorSuggestion } from '@/models/suggestions/authorSuggestion'
import { CategorySuggestion } from '@/models/suggestions/categorySuggestion'
import { UserRoles } from '@/enums/UserRoles'

@Component({
  components: { BookDisplay, RateBook, ReviewCard }
})
export default class BookListing extends Vue {
  @Prop(Object) book: BookSuggestion | undefined

  private author: AuthorSuggestion | null = null
  private category: CategorySuggestion | null = null
  private adminRoute: string | null = null

  async created (): Promise<void> {
    this.adminRoute = this.getUserRole.includes(UserRoles.ADMIN) ? UserRoles.ADMIN : ''
    await this.getAuthor()
    await this.getCategory()
  }

  async getAuthor (): Promise<void> {
    await axios.get(`${this.adminRoute}Authors/${this.book?.authorId}`).then(
      (response) => {
        this.author = response.data.content
      }
    )
  }

  async getCategory (): Promise<void> {
    await axios.get(`${this.adminRoute}Category/${this.book?.categoryId}`).then(
      (response) => {
        this.category = response.data.content
      }
    )
  }

  get dataLoaded (): boolean {
    return this.category !== null && this.author !== null
  }

  @Getter [UserStoreMethods.getUserRole]
}
</script>
