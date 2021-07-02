<template>
  <login-card></login-card>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import LoginCard from '@/views/login/content/LoginCard.vue'

@Component({
  components: { LoginCard }
})
export default class LoginPage extends Vue {
}
</script>
