<template>
  <el-row :gutter='24' justify='center' align='top'>
    <el-col>
      <el-row>
        <authors></authors>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import Authors from '@/components/forms/selects/content/Authors.vue'

@Component({
  components: { Authors }
})
export default class AdminCard extends Vue {
}
</script>
