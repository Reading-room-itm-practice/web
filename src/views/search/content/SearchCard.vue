<template>
  <div></div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { BasicResource } from '@/models/resourceBasic'
import { SearchResult } from '@/models/searchResult'
import axios from 'axios'

@Component
export default class ListingCard extends Vue {
  private searchType = this.$route.params.type
  private searchString = this.$route.params.input

  async created (): Promise<void> {
    await this.fetchResources()
  }

  private async fetchResources (): Promise<void> {
    await axios.get(`Search${this.searchType}`, {
      params: {
        searchString: this.searchString
      }
    }).then((response) => {
      const data = this.getDataFromResponse(response.data.content)
      console.log(data)
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

  private getDataFromResponse (responseData: Array<BasicResource>): SearchResult {
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
