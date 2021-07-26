<template>
  <el-row :class="getTheme + '-navbar nav'" ref='navbar'>
    <el-col :span="2" :offset='5'>
      <router-link to="/" class='break-items'>{{ $t('navbar.home') }}</router-link>
      <el-switch v-model="selectedTheme"
                 active-value='dark'
                 inactive-value='light'
                 :active-text="$t('navbar.darkmode')"
                 :inactive-text="$t('navbar.lightmode')"
                 class='break-items'
      ></el-switch>
      <router-link to="/admin" v-if="getUserRole.includes(UserRoles.ADMIN)" class='break-items'>Admin</router-link>
    </el-col>
    <el-col :span="10">
      <el-input v-model="searchInput" :placeholder="$t('navbar.searchBar')">
        <el-select style='width: 120px;' v-model='selectedResourceType' slot='prepend'>
          <el-option v-for='type in types' :key='type.id' :label='type.name' :value='type.id'></el-option>
        </el-select>
        <el-button @click="search" slot='append'>{{ $t('button.search') }}</el-button>
      </el-input>
    </el-col>
    <el-col :span="4">
      <div v-if="isLoggedIn">
        <router-link to="/profile" class='break-items'>{{ $t('navbar.profile') }}</router-link>
        <el-button @click="logout">{{ $t('navbar.logout') }}</el-button>
      </div>
      <div v-else>
        <router-link to="/login" class='break-items'>{{ $t('navbar.login') }}</router-link>
        <router-link to="/register">{{ $t('navbar.register') }}</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { UserStoreMethods } from '@/enums/UserStoreMethods'
import { Getter, Action } from 'vuex-class'
import { SuccessNotification } from '@/notifications/success'
import { i18n } from '@/localization/i18n'
import { UserRoles } from '@/enums/UserRoles'
import { ResourceType } from '@/models/resourceType'

@Component
export default class Navbar extends Vue {
  private searchInput = ''
  private UserRoles = UserRoles
  private selectedTheme: string | null = null
  private types: Array<ResourceType> = [
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

  @Watch('selectedTheme')
  onPropertyChange (selectedMode: boolean): void {
    this.setTheme(selectedMode)
  }

  @Action [UserStoreMethods.destroySession]
  @Action [UserStoreMethods.setTheme]
  @Getter [UserStoreMethods.isLoggedIn]
  @Getter [UserStoreMethods.getUserRole]
  @Getter [UserStoreMethods.getTheme]
}
</script>
