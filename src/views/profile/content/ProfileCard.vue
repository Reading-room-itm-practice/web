<template>
  <el-row :gutter='24' justify='top' align='center'>
    <el-col :offset='8'>
      <el-row class='profileBubble' v-if='!isLoggedIn'>
        <profile-options></profile-options>
      </el-row>
      <el-row>
        <el-col :span='12' class='profileBubble'>
          <profile-info></profile-info>
        </el-col>
        <el-col :span='12' class='profileBubble'>
          <profile-social></profile-social>
        </el-col>
      </el-row>
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
