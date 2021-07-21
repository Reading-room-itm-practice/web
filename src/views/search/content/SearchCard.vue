<template>
  <div></div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import { BasicResource } from '@/models/resourceBasic'

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
      const data = this.getResourcesFromResponse(response.data.content)
      if (response.status === 200 && data) {
        this.$router.push({
          name: 'SearchResult',
          params: {
            data: data
          }
        })
      }
    })
  }

  private getResourcesFromResponse (responseData: Array<BasicResource>) {
    const type = this.getResourceType()
    if (type === '') {
      return responseData
    } else {
      return {
        [type]: responseData
      }
    }
  }

  private getResourceType (): string {
    return this.searchType.split('/')[1]
  }
}
</script>
