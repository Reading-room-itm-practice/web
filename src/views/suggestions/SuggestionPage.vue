<template>
  <el-col>
    <el-row>
      <suggested-books></suggested-books>
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
}
</script>
