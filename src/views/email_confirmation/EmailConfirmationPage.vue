<template>
  <email-confirmation-card></email-confirmation-card>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import EmailConfirmationCard from '@/views/email_confirmation/content/EmailConfirmationCard.vue'

@Component({
  components: {
    EmailConfirmationCard
  }
})
export default class EmailConfirmationPage extends Vue {
}
</script>
