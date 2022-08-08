<template>
  <div>
    <List v-if="isList" @showDetail="showDetail" />
    <Combo v-else :detail-data="detailData" @close-callback="closeCallback" />
  </div>
</template>
<script>
import List from './components/manageList'
import Combo from './components/combo'
export default {
  components: {
    List,
    Combo
  },
  data() {
    return {
      isList: true,
      detailData: {}
    }
  },
  methods: {
    showDetail(data) {
      this.detailData = data
      this.isList = false
    },
    closeCallback() {
      this.isList = true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
