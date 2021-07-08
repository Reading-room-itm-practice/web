<template>
  <el-row :gutter='24' justify='center' align='top'>
    <el-col>
      <el-row>
        <authors></authors>
      </el-row>
      <el-row>
        <categories></categories>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import Authors from '@/components/forms/selects/Authors.vue'
import Categories from '@/components/forms/selects/Categories.vue'

@Component({
  components: { Categories, Authors }
})
export default class AdminCard extends Vue {
}
</script>
