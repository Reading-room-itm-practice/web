<template>
  <el-col :offset='8'>
    <el-collapse v-model="activeSuggestionType" accordion>
      <el-collapse-item title="Book">
        <book-input/>
      </el-collapse-item>
      <el-collapse-item title="Author">
        <author-input/>
      </el-collapse-item>
      <el-collapse-item title="Category">

      </el-collapse-item>
    </el-collapse>
  </el-col>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
import BookInput from '@/components/forms/inputs/BookInput.vue'
import AuthorInput from '@/components/forms/inputs/AuthorInput.vue'

@Component({
  components: { BookInput, AuthorInput }
})
export default class AddSuggestion extends Vue {
  private activeSuggestionType = []
}
</script>
