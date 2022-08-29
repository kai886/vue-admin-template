<template>
  <div>
    <!-- 头部搜索 -->
    <div class="search form">
      <el-form :model="searchData" label-position="left">
        <el-row :gutter="10">
          <el-col :sm="24" :md="4" :lg="4">
            <el-form-item label="">
              <el-input v-model="searchData.nameOrCode" placeholder="请输入套餐编号/名称" />
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="4" :lg="4">
            <el-form-item label="" style="width:100%">
              <el-select v-model="searchData.gender" style="width:100%" placeholder="请选择性别">
                <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="4" :lg="4">
            <el-form-item label="" style="width:100%">
              <el-select v-model="searchData.married" style="width:100%" placeholder="请选择婚姻状况">
                <el-option v-for="item in marriageOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="12" :lg="12">
            <el-form-item>
              <el-button icon="el-icon-search" type="primary" @click="dealSearch('query')">查询</el-button>
              <el-button icon="el-icon-refresh" @click="dealSearch('reset')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- table main -->
    <div class="table-main table">
      <el-table :data="tableData" :border="true" style="width: 100%">
        <el-table-column label="#" type="index" width="50" :align="align" />
        <el-table-column label="编号" prop="id" :align="align" />
        <el-table-column label="名称" prop="name" width="200px" :show-overflow-tooltip="true" :align="align" />
        <el-table-column label="描述" prop="introduce" :align="align">
          <template slot-scope="{row}">
            {{ row.introduce ? row.introduce : '--' }}
          </template>
        </el-table-column>x``
        <el-table-column label="性别" prop="sex" :align="align">
          <template slot-scope="{row}">
            {{ row.sex === 1 ? '男' :'女' }}
          </template>
        </el-table-column>
        <el-table-column label="操作" :align="align">
          <template slot-scope="{row}">
            <el-button type="primary" size="mini" @click="lookDetail(row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页按钮 -->
    <el-pagination class="san-margin-top-30" background layout="total, prev, pager, next, jumper" :current-page.sync="pageConfig.page" :page-size="pageConfig.size" :page-sizes="[10, 20, 30, 40, 50]" :total="pageConfig.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      align: 'center',
      timer: null,
      sexOptions: [
        {
          label: '男',
          value: 1
        }, {
          label: '女',
          value: 2
        }
      ],
      marriageOptions: [
        {
          label: '已婚',
          value: 1
        },
        {
          label: '未婚',
          value: 2
        }
      ],
      searchData: {
        nameOrCode: '',
        gender: '',
        married: ''
      },
      tableData: [
        {
          id: 1,
          name: 'ss',
          introduce: ''
        }
      ],
      pageConfig: {
        total: 0,
        page: 1,
        size: 10
      }
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    handleSizeChange (val) {
      this.pageConfig.size = val
      this.search()
    },
    handleCurrentChange (val) {
      this.pageConfig.page = val
      this.search()
    },
    lookDetail (row) {
      this.$emit('showDetail', row)
    },
    async getTableData () {
      // const { data: { total, records } } = await getList({
      //   pageIndex: this.pageConfig.page,
      //   pageSize: this.pageConfig.size
      // })
      // this.tableData = records
      // this.pageConfig.total = total
    },
    search () {
    },
    dealSearch (type) {
      this.timer && clearTimeout(this.timer)
      this.pageConfig.page = 1
      switch (type) {
        case 'reset':
          this.resetSearch()
          break
        case 'query':
          this.search()
          break
      }
    },
    resetSearch () {
      this.searchData.gender = ''
      this.searchData.nameOrCode = ''
      this.searchData.married = ''
      this.getTableData()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
