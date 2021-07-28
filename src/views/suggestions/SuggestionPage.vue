<template>
  <el-col :offset='8'>
    <el-row>
      <el-tabs v-model="activeTab" @tab-click="changeTab">
        <el-tab-pane label="Books" name="books">
          <suggested-books></suggested-books>
        </el-tab-pane>
        <el-tab-pane label="Books2" name="books2">
          asd
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
