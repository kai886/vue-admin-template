<template>
  <div class="table">
    <el-table :data="tableData" :style="principalControl.style" :default-sort="principalControl.defaultSort" :border="principalControl.border" :header-cell-style="principalControl.headerCellStyle">
      <el-table-column v-if="tableSonNode.isShowSelection" :label="tableSonNode.label" type="selection" />
      <el-table-column v-for="(item, list_index) in tableSonNode.list" :key="list_index" :prop="item.prop" :align="principalControl.align">
        <template slot="header">
          {{ item.label }}
        </template>
        <template slot-scope="scope">
          <span v-if="item.isIconNormal">
            <span v-if="scope.row[item.prop] === 1">
              <svg t="1659426332871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7735" width="48" height="48">
                <path d="M665.6 204.8H358.4c-84.48 0-153.6 69.12-153.6 153.6v307.2c0 84.48 69.12 153.6 153.6 153.6h307.2c84.48 0 153.6-69.12 153.6-153.6V358.4c0-84.48-69.12-153.6-153.6-153.6z" fill="#CCDAFF" p-id="7736" />
                <path d="M647.68 446.976L485.376 609.28s0 0.512-0.512 0.512c-6.656 6.656-16.896 8.192-25.088 5.12-2.56-1.024-5.632-2.56-7.68-5.12l-75.776-75.776c-9.216-9.216-9.216-23.552 0-32.768s23.552-9.216 32.768 0l59.904 59.904L615.424 414.72c9.216-9.216 23.552-9.216 32.768 0s8.704 23.04-0.512 32.256z" fill="#7A7AF9" p-id="7737" />
              </svg>
            </span>
          </span>
          <!-- <span v-if="item.isIcon">
            <span v-if="scope.row[item.prop] === 1">
              <img src="../../assets/img/green-ok.png" alt="">
            </span>
            <span
              v-else
            ><img
              src="../../assets/img/yellow-no.png"
              alt=""
            ></span>
          </span> -->
          <span v-if="item.isText">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="tableSonNode.isShowOperation" label="操作" align="center">
        <template slot-scope="scope">
          <el-button v-for="(item, btn_index) in tableSonNode.table_button" :key="btn_index" :type="item.type" :size="item.size" @click="emitFather(item.handleName, scope)">
            {{ item.title }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'SanTable',
  props: {
    // 表格行为
    principalControl: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 表格网络数据
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 表格子节点
    tableSonNode: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    emitFather(handleName, scope) {
      this.$emit('disposeSonHandle', handleName, scope)
    }
  }
}
</script>

<style scoped>
@import url("~@/styles/common.scss");
</style>
