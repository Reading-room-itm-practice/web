<template>
  <div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class ListingCard extends Vue {
  private searchType = this.$route.params.type
  private searchString = this.$route.params.input

  async created (): Promise<void> {
    await this.getResource()
  }

  private async getResource (): Promise<void> {
    await axios.get(`Search${this.searchType}`, {
      params: {
        searchString: this.searchString
      }
    }).then((response) => {
      const type = this.getResourceType()
      let data = {}
      if (type === '') {
        data = response.data.content
      } else {
        data[type] = response.data.content
      }
      if (response.status === 200 && response.data.content) {
        this.$router.push({
          name: 'SearchResult',
          params: {
            data: data
          }
        })
      }
    })
  }

  private getResourceType (): string {
    return this.searchType.split('/')[1]
  }
}
</script>
