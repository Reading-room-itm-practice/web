<template>
  <admin-card></admin-card>
</template>

<script lang='ts'>
import AdminCard from '@/views/admin/content/AdminCard.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    AdminCard
  }
})
export default class AdminPage extends Vue {
}
</script>
