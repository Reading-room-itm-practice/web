<template>
  <el-row>
    <el-col>
      {{ message }}
    </el-col>
  </el-row>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class EmailConfirmationCard extends Vue {
  private token = this.$route.params.token
  private message = this.$t('emailActivation.error')

  created (): void {
    if (this.token) {
      axios.post('url', this.token)
      this.message = this.$t('emailActivation.success')
    }
  }
}
</script>
