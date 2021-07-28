<template>
  <el-row>
    <base-suggestion suggestionType='Books'></base-suggestion>
  </el-row>
</template>

<script lang='ts'>
import { Component } from 'vue-property-decorator'
import BaseSuggestion from '@/components/BaseSuggestion.vue'
@Component({
  components: { BaseSuggestion }
})
export default class SuggestedBooks extends BaseSuggestion {
}
</script>
