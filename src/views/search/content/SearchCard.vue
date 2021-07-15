<template>
  <div>
    {{$route.params}}
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import { ResourceType } from '@/models/resourceType'

@Component
export default class ListingCard extends Vue {
  private data = []

  private async getResource (): Promise<void> {
    await axios.get(`Search${this.params.type}${this.params.input}`).then((response) => {
      console.log(response)
      this.data = response
    }
    )
  }

  async mounted (): Promise<void> {
    await this.getResource()
  }

  async updated (): Promise<void> {
    await this.getResource()
  }

  get params (): ResourceType {
    console.log(this.$route.params)
    return this.$route.params
  }
}
</script>
