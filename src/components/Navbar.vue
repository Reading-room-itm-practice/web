<template>
  <el-row :gutter="24" id="nav">
    <el-col :span="8">
      <router-link to="/">Home</router-link>
    </el-col>
    <el-col :span="10">
      <el-input v-model="searchInput" placeholder="Search for books and authors"></el-input>
    </el-col>
    <el-col :span="2">
      <el-button @click="search">Search</el-button>
    </el-col>
    <el-col :span="2">
      <div v-if="isLoggedIn">
        <router-link to="#">Profile</router-link>
      </div>
      <div v-else>
        <router-link to="#">Log in</router-link>
        <br>
        <router-link to="#">Sign up</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({ computed: mapGetters(['getToken']) })
export default class Navbar extends Vue {
  public searchInput = ''
  public getToken: string | null

  public search (): void {
    console.log(`searching for ${this.searchInput}`)
  }

  get isLoggedIn (): boolean {
    return this.getToken !== null
  }
}
</script>
