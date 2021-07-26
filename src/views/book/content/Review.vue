<template>
  <div class='review'>
    <el-row class='review-border'>
      <el-col>
        <h2>User name timestamp</h2>
      </el-col>
      <el-col>
        <el-image class='star'
                  v-for='starId in rating'
                  :key="'rate'+starId"
                  :src="require('@/assets/star_full.png')"
                  width
        ></el-image>
        <el-image class='star'
                  v-for='starId in (5 - rating)'
                  :key='starId'
                  :src="require('@/assets/star_empty.png')"
                  width
        ></el-image>
      </el-col>
    </el-row>
    <el-row class='review-border'>
      <h5>{{ $t('book.isRead') }} {{ isReadByUser }}</h5>
    </el-row>
    <el-row class='review-border'>
      <el-col>
        <h4>{{ comment }}</h4>
      </el-col>
    </el-row>
    <el-row>
      <el-col class='review-like'>
        <el-button>+</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Review extends Vue {
  @Prop(Number) readonly id: number | undefined
  @Prop(Number) readonly rating: number | undefined
  @Prop(String) readonly comment: string | undefined

  private isReadByUser = true
}
</script>
