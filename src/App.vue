<template>
  <div :class="getTheme + '-app'" ref='app'>
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
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { UserStoreMethods } from '@/enums/UserStoreMethods'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  @Watch('getTheme')
  onPropertyChange (theme: string): void {
    document.body.style.backgroundColor = (theme === 'dark') ? 'rgba(82, 97, 113, 0.93)' : 'white'
  }

  @Getter [UserStoreMethods.getTheme]
}
</script>

<style>
body {
  background-color: white;
}
</style>
