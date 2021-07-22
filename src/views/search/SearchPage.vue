<template>
  <search-card></search-card>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import SearchCard from '@/views/search/content/SearchCard.vue'

@Component({
  components: {
    SearchCard
  }
})
export default class SearchPage extends Vue {
}
</script>
