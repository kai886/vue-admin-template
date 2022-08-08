<!-- demo -->
<template>
  <div class="san-margin-top-left-30">
    <san-form :behavior-control="special.specialBehaviorControl" :form-son-node="special.specialFormSonNode" :form-data="specialFormData" @disposeSonHandle="disposeSonHandle" />

    <san-table style="margin-top: 10px" :table-son-node="special.specialTableSonNode" :table-data="specialTableData" :principal-control="special.specialPrincipalControl" @disposeSonHandle="disposeSonHandle" />

    <el-pagination class="san-margin-top-30" background layout="total, prev, pager, next, jumper" :current-page.sync="page.pageNum" :page-size="page.pageSize" :page-sizes="[10, 20, 30, 40, 50]" :total="page.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import { SanForm, SanTable } from '@/components/ElementTable/index'
import {
  special,
  organAddSpecial,
  editSpecial
} from '@/utils/vueComponentAction/combineBack'
// #endregion
export default {
  name: 'SpecialDay',
  components: {
    SanForm,
    SanTable
  },
  data() {
    return {
      special: special,
      organAddSpecial: organAddSpecial,
      editSpecial: editSpecial,

      specialFormData: {},
      organAddFormData: {},
      editSpecialFormData: {},

      specialTableData: [],
      page: {
        total: 0,
        pageSize: 10,
        pageNum: 1
      },
      isShowComponent: {
        isShowOrganAdd: false
      },

      dialogControl: {
        title: '',
        width: '',
        isShow: ''
      },
      checkboxGroupList: [],
      organAddComponentKey: 0,
      editNormalDayComponentKey: 0,
      fatherCheckboxGroupList: []
    }
  },
  created() {

  },
  methods: {
    disposeSonHandle(handleName, data) {
    },
    handleAdd() {
    },
    handleClose() {
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>
</style>
