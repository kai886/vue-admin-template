<template>
  <div>
    <div class="form">
      <Search :data="queryData" :field-list="fieldList" />
    </div>
    <table-list :loading="loading" :table-data="tableData" :table-label="tableLabel" :selection-show='true'>
      <template v-slot:status="sData">
        <span>{{sData.scope.row.status == 1? '正常': '关闭'}}</span>
      </template>
      <template v-slot:operation="tData">
        <el-link @click="handleEdit(tData.scope.row)">编辑</el-link>
      </template>
    </table-list>
  </div>
</template>

<script>
import TableList from "@/components/Table"
import Search from "@/components/Search"

export default {
  components: {
    TableList,
    Search
  },
  data () {
    return {
      loading: false,
      queryData: {
        Name: '',
        Sex: '',
        pageNum: 1,
        pageSize: 10
      },
      fieldList: [
        { label: "名称", type: "input", value: "Name" },
        { label: "性别", type: "input", value: "Sex" }
      ],
      tableData: [
        {
          skuName: '苹果',
          time: '2022-08-26',
          status: 1
        },
        {
          skuName: '华为'
        }
      ],
      tableLabel: [
        {
          label: '图片',
          param: 'defaultImage',
          align: 'center',
          slot: 'defaultImage'
        },
        {
          label: '商品名称',
          param: 'skuName',
          align: 'center',
        },
        {
          label: '商品编辑',
          param: 'skuId',
          align: 'center',
        },
        {
          label: '商品标签',
          param: 'zoneLabeName',
          align: 'center',
        },
        {
          label: '专区标签',
          param: 'tagTextName',
          align: 'center',
        },
        {
          label: '时间',
          param: 'time',
          align: 'center',
        },
        {
          label: '状态',
          param: 'status',
          align: 'center',
          slot: 'status'
        },
        {
          label: '操作',
          width: "300",
          fixed: 'right',
          align: 'center',
          slot: 'operation'
        },
      ]
    }
  },
  created () {

  },
  methods: {
    handleEdit (row) {
      console.log(row);
    }
  }
}
</script>