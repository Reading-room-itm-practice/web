<template>
  <el-row :gutter='24' justify='center' align='top'>
    <el-col>
      <el-row>
        <suggestion-page />
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import SuggestionPage from '@/views/suggestions/SuggestionPage.vue'

@Component({
  components: { SuggestionPage }
})
export default class AdminCard extends Vue {
}
</script>
