<template>
  <el-tabs v-model="activeTab" @tab-click="changeTab">
    <el-tab-pane label="Books" name="books">
      <span slot="label"><el-image :src="require('@/assets/book.png')" class='tab-image'></el-image></span>
      <suggested-books></suggested-books>
    </el-tab-pane>
    <el-tab-pane label="Categories" name="categories">
      <span slot="label"><el-image :src="require('@/assets/text.png')" class='tab-image'></el-image></span>
      <suggested-categories></suggested-categories>
    </el-tab-pane>
    <el-tab-pane label="Authors" name="authors">
      <span slot="label"><el-image :src="require('@/assets/man.png')" class='tab-image'></el-image></span>
      <suggested-authors></suggested-authors>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import SuggestedBooks from '@/views/suggestions/content/SuggestedBooks.vue'
import SuggestedCategories from '@/views/suggestions/content/SuggestedCategories.vue'
import SuggestedAuthors from '@/views/suggestions/content/SuggestedAuthors.vue'

@Component({
  components: {
    SuggestedAuthors,
    SuggestedCategories,
    SuggestedBooks
  }
})
export default class SuggestionCard extends Vue {
  private activeTab = 'books'

  changeTab (tab: Vue): void {
    this.activeTab = tab.name
  }
}
</script>
