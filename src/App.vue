<template>
  <div :class="getTheme + '-app'">
    <navbar></navbar>
    <el-row>
      <el-col :span="14">
        <router-view/>
        <notifications group='error' position='bottom center' classes='notification-error'/>
        <notifications group='success' position='bottom center' classes='notification-success'/>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import Navbar from '@/components/Navbar'
import { Vue, Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { UserStoreMethods } from '@/enums/UserStoreMethods'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  @Getter [UserStoreMethods.getTheme]
}
</script>
