<template>
  <div class="app-container">
    <el-tabs :key="index" v-model="activePath" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="Tab 1" name="first">
        <first-tab />
      </el-tab-pane>
      <el-tab-pane label="Tab 2" name="second">
        <second-tab />
      </el-tab-pane>
      <el-tab-pane label="Tab 3" name="third">
        <third-tab />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import FirstTab from '@/views/secondlevel/tabs/components/First.vue'
import SecondTab from '@/views/secondlevel/tabs/components/Second.vue'
import ThirdTab from '@/views/secondlevel/tabs/components/Third.vue'

export default {
  components: {
    FirstTab,
    SecondTab,
    ThirdTab
  },
  data () {
    return {
      activePath: 'first',
      index: 0
    }
  },
  created () {
  },

  methods: {
    handleClick () {
      this.index += 1
    }
  }
}
</script>
