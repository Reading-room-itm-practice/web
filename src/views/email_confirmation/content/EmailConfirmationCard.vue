<template>
  <el-row>
    <el-col>
      {{ responseMessage }}
    </el-col>
  </el-row>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class EmailConfirmationCard extends Vue {
  private token: string = this.$route.query.token
  private username: string = this.$route.query.username
  private responseMessage: string = this.$t('emailActivation.error').toString()

  created (): void {
    if (this.token) {
      axios.get('Authenticate/Confirm-email', {
        params: {
          token: this.token,
          username: this.username
        }
      }).then((response) => {
        if (response.status === 200) {
          this.responseMessage = this.$t('emailActivation.success')
        }
      })
    }
  }
}
</script>
