<template>
  <el-row :gutter='24' justify='center' align='top'>
    <el-col>
      <el-row>
        <suggested-books />
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import SuggestedBooks from '@/views/suggestions/content/SuggestedBooks.vue'

@Component({
  components: { SuggestedBooks }
})
export default class AdminCard extends Vue {
}
</script>
