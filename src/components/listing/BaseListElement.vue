<template>
  <el-row :gutter='24'>
    <el-col :span='18' class='list-element'>
      <slot></slot>
    </el-col>
    <el-col :span='6'>
      <el-button type="success" icon="el-icon-check" @click='approve' circle></el-button>
      <el-button type="primary" icon="el-icon-edit" @click='edit' circle></el-button>
      <el-button type="danger" icon="el-icon-delete" @click='eradicate' circle></el-button>
    </el-col>
  </el-row>
</template>

<script lang='ts'>

import { Vue, Component, Prop } from 'vue-property-decorator'
import { Category } from '@/models/category'
import { Book } from '@/models/book'
import { Author } from '@/models/author'

@Component
export default class BaseListElement extends Vue {
  @Prop(Object) readonly record: Book | Category | Author

  private approve (): Promise<void> {
    console.log(`approve ${this.record.id}`)
  }

  private edit (): Promise<void> {
    console.log(`edit ${this.record.id}`)
  }

  private eradicate (): Promise<void> {
    console.log(`eradicate ${this.record.id}`)
  }
}
</script>
