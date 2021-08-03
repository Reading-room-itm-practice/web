<template>
  <el-col :offset='8'>
    <el-collapse v-model="activeSuggestionType" accordion>
      <el-collapse-item title="Book">
        <book-input/>
      </el-collapse-item>
      <el-collapse-item title="Author">

      </el-collapse-item>
      <el-collapse-item title="Category">

      </el-collapse-item>
    </el-collapse>
  </el-col>
</template>

<script lang='ts'>

import { Vue, Component } from 'vue-property-decorator'
import BookInput from '@/components/forms/inputs/BookInput.vue'
@Component({
  components: { BookInput }
})
export default class AddSuggestion extends Vue {
  private activeSuggestionType = []
}
</script>
