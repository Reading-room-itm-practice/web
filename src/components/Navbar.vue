<template>
  <el-row :gutter="24" id="nav" justify='center'>
    <el-col :span="4" :offset='4'>
      <router-link to="/">{{ $t('navbar.home') }}</router-link>
      <br>
      <router-link to="/admin" v-if="getUserRole.includes(UserRoles.ADMIN)">Admin</router-link>
    </el-col>
    <el-col :span="8">
      <el-input v-model="searchInput" :placeholder="$t('navbar.searchBar')">
        <el-button slot="append" icon="el-icon-search" @click='search'></el-button>
      </el-input>
    </el-col>
    <el-col :span="4">
      <div v-if="isLoggedIn">
        <router-link to="/profile" style='display: block;'>{{ $t('navbar.profile') }}</router-link>
        <el-button @click="logout">{{ $t('navbar.logout') }}</el-button>
      </div>
      <div v-else>
        <router-link to="/login" style='display: block;'>{{ $t('navbar.login') }}</router-link>
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

@Component
export default class Navbar extends Vue {
  private searchInput = ''
  private UserRoles = UserRoles

  private search (): void {
    console.log(`searching for ${this.searchInput}`)
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
