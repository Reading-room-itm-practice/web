<template>
  <el-col>
    <el-row>
      <h1 class='book-title'>
        {{ title }} ({{ releaseYear }})
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
      <span class='book-desc'>{{ description }}</span>
    </el-row>
  </el-col>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Author } from '@/models/author'
import { Category } from '@/models/category'

@Component
export default class BookDisplay extends Vue {
  @Prop(String) title: string | undefined
  @Prop(Object) category: Category | undefined
  @Prop(Object) author: Author | undefined
  @Prop(String) description: string | undefined
  @Prop(Number) releaseYear: number | undefined
}
</script>
