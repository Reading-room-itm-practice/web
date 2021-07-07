<template>
  <el-row :gutter="24" id="nav">
    <el-col :span="8">
      <router-link to="/">{{ $i18n.messages.navbar.home }}</router-link>
    </el-col>
    <el-col :span="10">
      <el-input v-model="searchInput" :placeholder="$i18n.messages.navbar.searchBar"></el-input>
    </el-col>
    <el-col :span="2">
      <el-button @click="search">{{ $i18n.messages.navbar.searchButton }}</el-button>
    </el-col>
    <el-col :span="2">
      <div v-if="isLoggedIn">
        <router-link to="/profile">{{ $i18n.messages.navbar.profile }}</router-link>
        <br>
        <el-button @click="setToken('')">{{ $i18n.messages.navbar.logout }}</el-button>
      </div>
      <div v-else>
        <router-link to="/login">{{ $i18n.messages.navbar.login }}</router-link>
        <br>
        <router-link to="/register">{{ $i18n.messages.navbar.register }}</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { Getter, Action } from 'vuex-class'

@Component
export default class Navbar extends Vue {
  public searchInput = ''

  public search (): void {
    console.log(`searching for ${this.searchInput}`)
  }

  @Action [UserStoreMethods.setToken]
  @Getter [UserStoreMethods.isLoggedIn]
}
</script>
