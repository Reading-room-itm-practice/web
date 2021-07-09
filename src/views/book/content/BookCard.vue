<template>
  <el-row>
    <el-col>
      <div>{{ 'imageeeeee' }}</div>
    </el-col>
    <el-col>
      <el-row v-if="!isLoading">
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
import { Getter } from 'vuex-class'
import { RequestStateMethods } from '@/enums/RequestStateMethods'

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

  @Getter [RequestStateMethods.isLoading]
}
</script>
