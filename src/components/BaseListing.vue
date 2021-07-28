<template>
  <el-row v-if='isDataLoaded'>
    <el-col>
      <h2>{{ type }}</h2>
      <base-list-element v-for='(record, index) in data' :key='index' :record='record'>{{record}}</base-list-element>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Book } from '@/models/book'
import { Author } from '@/models/author'
import { Category } from '@/models/category'
import BaseListElement from '@/components/BaseListElement.vue'

@Component({
  components: {
    BaseListElement
  }
})
export default class BaseListing extends Vue {
  @Prop(Array) readonly data: Array<Book | Author | Category> | null
  @Prop(String) readonly type: string

  get isDataLoaded (): boolean {
    return this.data !== null
  }
}
</script>
