<template>
  <profile-card></profile-card>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import ProfileCard from '@/views/profile/content/ProfileCard.vue'

@Component({
  components: {
    ProfileCard
  }
})
export default class ProfilePage extends Vue {
}
</script>
