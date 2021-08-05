<template>
  <el-col :offset='8'>
    <el-row :gutter='24'>
      <suggestion-card></suggestion-card>
    </el-row>
  </el-col>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import SuggestionCard from '@/views/suggestions/content/SuggestionCard.vue'

@Component({
  components: {
    SuggestionCard
  }
})
export default class SuggestionPage extends Vue {
}
</script>
