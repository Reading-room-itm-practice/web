<template>
  <h2>
    <el-row>
        <el-col>
          Followers: 0
        </el-col>
    </el-row>
    <hr>
    <el-row>
      Friends: 0
    </el-row>
    <hr>
    <el-row>
      Favourite books: 0
    </el-row>
  </h2>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProfileSocial extends Vue {
}
</script>
