<template>
  <el-col>
    <el-row>
      <h1 class='book-title'>
        {{ book.title }} ({{ book.releaseYear }})
      </h1>
    </el-row>
    <el-row>
      <el-col :span='24'>
        <hr>
        <router-link class='link' :to="'/author/'+author.id"><h2>{{ author.name }}</h2></router-link>
      </el-col>
      <el-col :span='24'>
        <hr>
        <router-link class='link' :to="'/category/'+category.id"><h2>{{ category.name }}</h2></router-link>
      </el-col>
    </el-row>
    <el-row>
      <hr>
      <span class='book-desc'>{{ book.description }}</span>
    </el-row>
  </el-col>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { CategorySuggestion } from '@/models/suggestions/categorySuggestion'
import { AuthorSuggestion } from '@/models/suggestions/authorSuggestion'
import { Author } from '@/models/author'
import { Category } from '@/models/category'
import { BookSuggestion } from '@/models/suggestions/bookSuggestion'
import { Book } from '@/models/book'

@Component
export default class BookDisplay extends Vue {
  @Prop(Object) book: Book | BookSuggestion | undefined
  @Prop(Object) category: Category | CategorySuggestion | undefined
  @Prop(Object) author: Author | AuthorSuggestion | undefined
}
</script>
