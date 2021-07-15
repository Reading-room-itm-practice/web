<template>
  <listing-card></listing-card>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import ListingCard from '@/views/search/content/SearchCard.vue'

@Component({
  components: {
    ListingCard
  }
})
export default class ListingPage extends Vue {
}
</script>
