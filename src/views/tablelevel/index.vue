<template>
  <div>
    <div class="form">
      <el-form ref="SearchList" :inline="true" :model="SearchList">
        <el-form-item>
          <el-input v-model.trim="SearchList.id" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item>
          <el-select v-model="SearchList.type" placeholder="请选择" clearable class="input-width">
            <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button v-db-click type="primary" @click="handleSearch">
            <i class="el-icon-search" />
            搜索
          </el-button>
          <el-button v-db-click @click="handleReset">
            <i class="el-icon-refresh" />
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table">
      <el-button @click="exportFile" size="mini" style="margin-bottom: 10px">导出PDF</el-button>
      <el-table id="pdfDom" :data="tableData" border height="400" :default-sort="{prop: 'date', order: 'descending'}" :header-cell-style="{background:'rgb(244,247,250)',color:'#606266'}">
        <el-table-column label="序号" align="center" width="60" fiexd prop="index">
          <template slot-scope="scope">
            {{ page.pageSize * (page.pageNum - 1) + scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="编号" sortable prop="id" align="center" show-overflow-tooltip />
        <el-table-column label="名称" prop="name" align="center" show-overflow-tooltip />
        <el-table-column label="描述" prop="introduce" align="center" show-overflow-tooltip />
        <el-table-column label="原价" sortable prop="originalprice" align="center" show-overflow-tooltip />
        <el-table-column label="价格" sortable prop="price" align="center" show-overflow-tooltip />
        <el-table-column label="分类" prop="type" align="center" show-overflow-tooltip />
        <el-table-column class-name="status-col" label="状态" width="110" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" prop="operation" fixed="right" align="center" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="san-margin-top-30">
      <el-pagination layout="total, prev, pager, next, jumper" :current-page.sync="page.pageNum" :page-size="page.pageSize" :page-sizes="[10, 20, 30, 40, 50]" :total="page.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>
<script>

export default {
  filters: {
    statusFilter (status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data () {
    return {
      SearchList: {},
      tableData: [
        {
          id: '00001',
          name: '奔驰',
          introduce: '-',
          originalprice: '20.00',
          price: '10.00',
          type: '汽车',
          status: 'published'
        },
        {
          id: '0002',
          name: '奔驰',
          introduce: '-',
          originalprice: '20.00',
          price: '10.00',
          type: '汽车',
          status: 'draft'
        },
        {
          id: '0003',
          name: '奔驰',
          introduce: '-',
          originalprice: '20.00',
          price: '10.00',
          type: '汽车',
          status: 'deleted'
        },
        {
          id: '0004',
          name: '奔驰',
          introduce: '-',
          originalprice: '20.00',
          price: '10.00',
          type: '汽车',
          status: 'published'
        },
        {
          id: '0005',
          name: '奔驰',
          introduce: '-',
          originalprice: '20.00',
          price: '10.00',
          type: '汽车',
          status: 'draft'
        },
        {
          id: '0006',
          name: '奔驰',
          introduce: '-',
          originalprice: '20.00',
          price: '10.00',
          status: 'draft',
          type: '汽车'
        }
      ],
      type: [
        {
          value: 0,
          label: '全部'
        }
      ],
      page: {
        total: 0,
        pageSize: 10,
        pageNum: 1
      }
    }
  },
  created () {

  },
  mounted () { },
  methods: {
    handleSearch () {
      console.log(this.SearchList)
    },
    handleReset () {
      this.SearchList = {}
    },
    handleSync () { },
    handleClick (row) {
      this.$router.push({
        path: '/table-level/view',
        query: { project: row }
      })
    },
    handleSizeChange (val) {
      this.page.pageSize = val
    },
    handleCurrentChange (val) {
      this.page.pageNum = val
    },
    exportFile () {
      this.getPdf('pdfDom', '数据统计')
    },
  }
}
</script>
<style scoped>
@import url("~@/styles/common.scss");
</style>
