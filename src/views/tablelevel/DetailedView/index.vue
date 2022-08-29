<template>
  <div class="app-container">
    <div class="button-margin-bottom">
      <el-button v-db-click size="mini" icon="el-icon-arrow-left" @click="backToFather">返回</el-button>
    </div>
    <el-card>
      <el-table :data="memberData" border :header-cell-style="{background:'rgb(244,247,250)',color:'#606266'}">
        <el-table-column label="title1" align="center" show-overflow-tooltip />
        <el-table-column label="title12" prop="nickName" align="center" show-overflow-tooltip />
        <el-table-column label="title3" align="center" show-overflow-tooltip />
        <el-table-column label="title4" align="center" show-overflow-tooltip />
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memberData: []
    }
  },
  created () {
  },
  methods: {
    backToFather () {
      this.$router.push({
        path: '/table-level/index'
      })
    }
  }
}
</script>

<style scoped>
.button-margin-bottom {
  margin-bottom: 10px;
}
</style>
