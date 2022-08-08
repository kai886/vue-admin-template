<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <!-- name: {{ name }} -->
      Vue后台管理系统
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  &-text {
    font-size: 40px;
    line-height: 46px;
  }
}
</style>
