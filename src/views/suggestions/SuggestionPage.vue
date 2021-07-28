<template>
  <el-col :offset='8'>
    <el-row>
      <el-tabs v-model="activeTab" @tab-click="changeTab">
        <el-tab-pane label="Books" name="books">
          <span slot="label"><el-image :src="require('@/assets/book.png')" class='tab-image'></el-image></span>
          <suggested-books></suggested-books>
        </el-tab-pane>
        <el-tab-pane label="Categories" name="categories">
          <span slot="label"><el-image :src="require('@/assets/text.png')" class='tab-image'></el-image></span>
          Cats
        </el-tab-pane>
        <el-tab-pane label="Authors" name="authors">
          <span slot="label"><el-image :src="require('@/assets/man.png')" class='tab-image'></el-image></span>
          Authors
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </el-col>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import SuggestedBooks from '@/views/suggestions/content/SuggestedBooks.vue'

@Component({
  components: {
    SuggestedBooks
  }
})
export default class SuggestionPage extends Vue {
  private activeTab = 'books'

  changeTab (tab: Vue): void {
    this.activeTab = tab.name
  }
}
</script>
