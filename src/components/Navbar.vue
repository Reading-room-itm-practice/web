<template>
  <el-row id="nav">
    <el-col :span="2" :offset='5'>
      <router-link to="/">{{ $t('navbar.home') }}</router-link>
      <br>
      <router-link to="/admin" v-if="getUserRole.includes(UserRoles.ADMIN)">Admin</router-link>
    </el-col>
    <el-col :span="10">
      <el-input v-model="searchInput" :placeholder="$t('navbar.searchBar')">
        <el-select style='width: 120px;' v-model='selectedResourceType' slot='prepend'>
          <el-option v-for='type in types' :key='type.id' :label='type.name' :value='type.id'></el-option>
        </el-select>
        <el-button @click="search" slot='append'>{{ $t('navbar.searchButton') }}</el-button>
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
import { BasicResource } from '@/models/resourceBasic'

@Component
export default class Navbar extends Vue {
  private searchInput = ''
  private UserRoles = UserRoles
  private types: Array<BasicResource> = [
    { id: '/', name: 'All' },
    { id: '/Author', name: 'Authors' },
    { id: '/Books', name: 'Books' },
    { id: '/Categories', name: 'Categories' },
    { id: '/User', name: 'Users' }
  ]

  private selectedResourceType: string = this.types[0].id

  private search (): void {
    if (this.searchInput && this.selectedResourceType) {
      this.$router.push({
        name: 'SearchPage',
        params: {
          type: this.selectedResourceType,
          input: this.searchInput
        }
      })
      this.searchInput = ''
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
