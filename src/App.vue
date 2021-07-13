<template>
  <div>
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

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar }
}
</script>
