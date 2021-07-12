<template>
  <el-row v-if="dataLoaded" :gutter='24'>
    <el-col class='book-bubble' :offset='8'>
      <el-col class='book-cover' :span='8'>
        <el-image :src="require('@/assets/logo.png')"></el-image>
      </el-col>
      <el-col :span='16'>
        <el-row>
          <h1 class='book-title'>
            {{ book.title }} ({{ book.releaseYear }})
          </h1>
        </el-row>
        <el-row>
          <el-col :span='24'>
            <hr>
            <el-link><h2>{{ author.name }}</h2></el-link>

          </el-col>
          <el-col :span='24'>
            <hr>
            <el-link><h2>{{ category.name }}</h2></el-link>
          </el-col>
        </el-row>
        <el-row>
          <hr>
          <span class='book-desc'>{{ book.description }}</span>
        </el-row>
      </el-col>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { Book } from '@/models/book'
import axios from 'axios'
import { Author } from '@/models/author'
import { Category } from '@/models/category'

@Component
export default class BookCard extends Vue {
  private bookId: string = this.$route.params.id
  private book: Book | null = null
  private author: Author | null = null
  private category: Category | null = null

  async created (): Promise<void> {
    await this.getBook()
    await this.getAuthor()
    await this.getCategory()
    await this.getRates()
  }

  async getBook (): Promise<void> {
    await axios.get(`Books/${this.bookId}`).then(
      (response) => {
        this.book = response.data
      }
    )
  }

  async getAuthor (): Promise<void> {
    await axios.get(`Authors/${this.book?.authorId}`).then(
      (response) => {
        this.author = response.data
      }
    )
  }

  async getCategory (): Promise<void> {
    await axios.get(`Category/${this.book?.categoryId}`).then(
      (response) => {
        this.category = response.data
      }
    )
  }

  async getRates (): Promise<void> {
    console.log('get rates')
  }

  get dataLoaded (): boolean {
    return this.category !== null && this.author !== null && this.book !== null
  }
}
</script>
