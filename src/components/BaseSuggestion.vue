<template>
  <div></div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class SearchPage extends Vue {
  @Prop(String) readonly suggestionType: string

  async created (): Promise<void> {
    await this.getSuggestions()
  }

  private async getSuggestions (): Promise<void> {
    if (this.suggestionType) {
      await axios.get(`Admin${this.suggestionType}`).then((response) => {
        this.$emit('got-suggestions', response.data.content)
      })
    }
  }

  get name (): string {
    let tag = this.$options._componentTag.split('-')[1]
    tag = tag.charAt(0).toUpperCase() + tag.slice(1)
    return tag
  }
}
</script>
