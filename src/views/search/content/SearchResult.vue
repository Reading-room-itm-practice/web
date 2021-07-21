<template>
  <el-row>
    <el-col :offset='8'>
      <el-row v-for='(resource, resourceType) in data' :key='resourceType' class='search-type'>
        <div v-if='resource.length > 0'>
          <h1>{{ resourceType }}</h1>
          <div v-for='(record, recordIndex) in resource'
               :key="'record' + recordIndex"
               @click='goTo(resourceType, record.id)'
               class='search-bubble'
          >
            <h3 v-if='record.name'>
              {{ record.name }}
            </h3>
            <h4 v-if='record.biography'>
              {{ record.biography }}
            </h4>
            <h3 v-if='record.userName'>
              {{ record.userName }}
            </h3>
            <h3 v-if='record.title'>
              {{ record.title }}
            </h3>
            <h4 v-if='record.description'>
              {{ record.description }}
            </h4>
          </div>
        </div>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SearchResult extends Vue {
  private data

  created (): void {
    this.data = this.$route.params.data
    if (!this.data) {
      this.$router.push('/')
    }
    this.removeEmptyKeys()
  }

  private removeEmptyKeys (): void {
    for (const [key, value] of Object.entries(this.data)) {
      if (!(Array.from(value).length > 0)) delete this.data[key]
    }
  }

  private goTo (path: string, id: string): void {
    console.log(`going to ${path.toLocaleLowerCase()}/${id}`)
  }
}
</script>
