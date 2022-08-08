<template>
  <div>
    <!-- 表单展示 -->
    <div class="form">
      <div class="btn">
        <el-button icon="el-icon-arrow-left" @click="back">返回</el-button>
      </div>
      <div class="btn">套餐管理字段展示:</div>
      <el-form label-width="80px" :inline="true" :model="formInline">
        <el-form-item label="套餐编号">
          <el-input v-model="detailData.id" :disabled="true" style="width:200px" placeholder="套餐编号/名称" />
        </el-form-item>
        <el-form-item label="套餐名称">
          <el-input v-model="detailData.name" :disabled="true" style="width:200px" placeholder="套餐名称" />
        </el-form-item>
        <el-form-item label="套餐描述">
          <el-input v-model="detailData.introduce" :disabled="true" style="width:200px" placeholder="套餐描述" />
        </el-form-item>
        <el-form-item label="婚姻状况">
          <el-select v-model="detailData.marriage" :disabled="true" style="width:200px" placeholder="请选择婚姻状况">
            <el-option v-for="item in sexList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" :inline="true" :model="formInline">
        <el-form-item label="价格">
          <el-input v-model="detailData.setprice" style="width:200px" :disabled="true" placeholder="价格" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="detailData.sex" :disabled="true" style="width:200px" placeholder="请选择性别">
            <el-option v-for="item in sexList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="formInline.displayorder" style="width:200px" :disabled="true" placeholder="类别" />
        </el-form-item>
      </el-form>
    </div>

    <div class="formShow">
      <div class="btn">套餐管理详情展示:</div>
      <!-- 表单 -->
      <el-form :inline="true" :model="form">
        <el-form-item label="">
          <el-input v-model="form.nameOrCode" placeholder="请输入套餐编号/名称" />
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.type" placeholder="请输入分类" />
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.gender" style="width:100%" placeholder="请选择性别">
            <el-option v-for="item in sexList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.married" style="width:100%" placeholder="请选择婚姻状况">
            <el-option v-for="item in List" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
          <el-button icon="el-icon-refresh" @click="refresh">重置</el-button>

        </el-form-item>
      </el-form>
    </div>

    <!-- 表格 -->
    <div class="table">
      <el-table v-loading="loading" :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="项目编号" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.id?scope.row.id:'--' }}
          </template>
        </el-table-column>

        <el-table-column prop="name" label="项目名称" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.name?scope.row.name:'--' }}
          </template>
        </el-table-column>
        <el-table-column prop="introduce" label="项目描述" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.introduce?scope.row.introduce:'--' }}
          </template>
        </el-table-column>
        <el-table-column prop="price" label="原价" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.price?scope.row.price:'--' }}
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类别" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.type?scope.row.type:'--' }}
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.sex?scope.row.sex:'--' }}
          </template>
        </el-table-column>
        <el-table-column prop="marriage" label="婚姻状态" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.marriage?scope.row.marriage:'--' }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <el-pagination class="san-margin-top-30" background layout="total, prev, pager, next, jumper" :current-page="currentPage" :page-size="pageSize" :page-sizes="[10, 20, 30, 40, 50]" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />

  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    detailData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      loading: false,
      total: 0,
      currentPage: 1,
      pageSize: 10,
      form: {
        gender: '',
        married: '',
        nameOrCode: '',
        type: ''
      },
      formInline: {},
      sexList: [
        {
          id: 0,
          name: '全部'
        },
        {
          id: 1,
          name: '男'
        },
        {
          id: 2,
          name: '女'
        }
      ],
      List: [],
      tableData: [],
      tableDataAll: []
    }
  },
  created() {
    this.init()
  },
  mounted() {
  },
  methods: {
    refresh() {
      this.form.gender = 0
      this.currentPage = 1
      this.pageSize = 10
      this.form = {
        gender: '',
        married: '',
        nameOrCode: '',
        type: ''
      }
      this.init()
    },
    search() {
      this.loading = true
      const params = {
        setMealId: this.detailData.id,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        gender: this.form.gender,
        married: this.form.married,
        nameOrCode: this.form.nameOrCode,
        type: this.form.type
      }
    },
    synchronization() { },
    back() {
      this.$emit('close-callback')
    },
    init() {
      this.form.gender = 0
      this.loading = true
      const params = {
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        setMealId: this.detailData.id

      }
    },

    // 分页
    handleSizeChange(val) {
      this.currentPage = 1
      this.pageSize = val
      this.search()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.search()
    }
  }
}
</script>

<style lang="scss"  scoped>
.btn {
  margin-bottom: 20px;
}
.table {
  margin-top: 20px;
  padding: 24px 20px 20px 20px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(33, 72, 141, 0.2);
}
.formShow {
  margin-top: 20px;
  padding: 24px 20px 0px 20px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(33, 72, 141, 0.2);
}
.form {
  padding: 20px 20px 0 20px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(33, 72, 141, 0.2);
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
