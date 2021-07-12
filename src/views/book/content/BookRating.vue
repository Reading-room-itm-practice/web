<template>
  <el-row v-if="dataLoaded" :gutter='24'>
    <el-col class='book-bubble' :offset='8'>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BookRating extends Vue {
  get dataLoaded (): boolean {
    return true
  }
}
</script>
