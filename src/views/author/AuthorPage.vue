<template>
  <author-card></author-card>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import AuthorCard from '@/views/author/content/AuthorCard.vue'

@Component({
  components: {
    AuthorCard
  }
})
export default class AuthorPage extends Vue {
}
</script>
