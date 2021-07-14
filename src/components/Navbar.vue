<template>
  <el-row :gutter="24" id="nav">
    <el-col :span="8">
      <router-link to="/">{{ $t('navbar.home') }}</router-link>
      <br>
      <router-link to="/admin" v-if="getUserRole.includes(UserRoles.ADMIN)">Admin</router-link>
    </el-col>
    <el-col :span="10">
      <el-input v-model="searchInput" :placeholder="$t('navbar.searchBar')">
        <el-select v-model='selectedResourceType' slot='prepend' placeholder='heklp'>
          <el-option v-for='type in types' :key='type.id' :label='type.name' :value='type.id'></el-option>
        </el-select>
        <el-button @click="search" slot='append'>{{ $t('navbar.searchButton') }}</el-button>
      </el-input>
    </el-col>
    <el-col :span="2">
    </el-col>
    <el-col :span="2">
      <div v-if="isLoggedIn">
        <router-link to="/profile">{{ $t('navbar.profile') }}</router-link>
        <br>
        <el-button @click="logout">{{ $t('navbar.logout') }}</el-button>
      </div>
      <div v-else>
        <router-link to="/login">{{ $t('navbar.login') }}</router-link>
        <br>
        <router-link to="/register">{{ $t('navbar.register') }}</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { Getter, Action } from 'vuex-class'
import { SuccessNotification } from '@/notifications/success'
import { i18n } from '@/localization/i18n'
import { UserRoles } from '@/enums/UserRoles'
import axios from 'axios'
import { BasicResource } from '@/models/resource'

@Component
export default class Navbar extends Vue {
  private searchInput = ''
  private UserRoles = UserRoles
  private types: Array<BasicResource> = [
    { id: '/', name: 'All' },
    { id: '/Author/', name: 'Authors' },
    { id: '/Books/', name: 'Books' },
    { id: '/Categories/', name: 'Categories' },
    { id: '/User/', name: 'Users' }
  ]

  private selectedResourceType: string = this.types[0].id

  private search (): void {
    console.log(`searching for ${this.searchInput} ${this.selectedResourceType}`)
    if (this.searchInput && this.selectedResourceType) {
      axios.get(`Search${this.selectedResourceType}${this.searchInput}`).then((response) =>
        console.log(response)
      )
    }
  }

  private logout (): void {
    Vue.notify(new SuccessNotification(i18n.t('success.logout')))
    this.destroySession()
  }

  @Action [UserStoreMethods.destroySession]
  @Getter [UserStoreMethods.isLoggedIn]
  @Getter [UserStoreMethods.getUserRole]
}
</script>
