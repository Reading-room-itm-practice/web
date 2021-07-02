<template>
  <el-row :gutter='24' justify='top' align='center'>
    <el-col :offset='8'>
      <profile-info></profile-info>
      <profile-options></profile-options>
      <profile-social></profile-social>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import ProfileInfo from '@/views/profile/content/ProfileInfo.vue'
import ProfileOptions from '@/views/profile/content/ProfileOptions.vue'
import ProfileSocial from '@/views/profile/content/ProfileSocial.vue'

@Component({
  components: {
    ProfileOptions,
    ProfileInfo,
    ProfileSocial
  }
})
export default class ProfileCard extends Vue {
}
</script>
