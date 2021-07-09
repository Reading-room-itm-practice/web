<template>
  <el-row>
    <el-col>
      <div v-if='book.mainPhotoId'>{{ 'imageeeeee' }}</div>
    </el-col>
    <el-col>
      <el-row>
        {{ book.title }}
      </el-row>
      <el-row>
        <el-col>
          {{ author.name }}
          {{ category.name }}
          {{ book.releaseYear }}
        </el-col>
      </el-row>
      <el-row>
        {{ book.description }}
      </el-row>
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
  private bookId: number = this.$route.params.id
  private book: Book = ''
  private author: Author = ''
  private category: Category = ''

  async created (): void {
    await this.getBook()
    await this.getAuthor()
    await this.getCategory()
    await this.getRates()
  }

  async getBook (): void {
    await axios.get(`Books/${this.bookId}`).then(
      (response) => {
        this.book = response.data
      }
    )
  }

  async getAuthor (): void {
    await axios.get(`Authors/${this.book.authorId}`).then(
      (response) => {
        this.author = response.data
      }
    )
  }

  async getCategory (): void {
    await axios.get(`Category/${this.book.categoryId}`).then(
      (response) => {
        this.category = response.data
      }
    )
  }

  async getRates (): void {
    console.log('get rates')
  }
}
</script>
