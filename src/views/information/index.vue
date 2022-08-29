<template>
  <div class="app-container">
    <el-card v-loading="cardLoading" class="filter-container" shadow="never">
      <el-row :gutter="20">
        <el-form ref="form" v-loading="loading" :model="form" :rules="rules" label-width="100px">
          <el-col :span="6" :offset="4">
            <div>
              <el-form-item label="头像：">
                <el-row class="demo-avatar demo-basic">
                  <el-col :span="12" style="width:auto;">
                    <div class="demo-basic--circle">
                      <div class="block">
                        <el-avatar v-loading="avataLoading" :size="40" :src="squareUrl" icon="el-icon-user-solid" @error="errorHandler" />
                        <span v-show="showvalue && this.squareUrl" title="点击删除头像"> <i class="el-icon-close" style="font-size: 20px;" @click="handleRemove" /></span>
                      </div>
                    </div>
                  </el-col>
                  <el-col v-show="showvalue" :span="12" style="width:auto">
                    <div class="demo-basic--circle" style="text-align:center">
                      <el-upload ref="my-upload" class="upload-demo" action="" :http-request="handleFileUpload" :on-remove="handleRemove" multiple :show-file-list="false" :limit="3">
                        <el-button size="small" type="text" style="margin-left:20px">点击上传</el-button>
                      </el-upload>
                    </div>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="姓名：">
                <span>{{ name }}</span>
              </el-form-item>
              <el-form-item label="性别：">
                <template>
                  <el-radio-group v-show="showvalue" v-model="form.sex">
                    <el-radio :label="0">男</el-radio>
                    <el-radio :label="1">女</el-radio>
                  </el-radio-group>
                  <span v-show="!showvalue">{{ form.sex == 0 ? '男':form.sex == 1? '女': '' }}</span>
                </template>
              </el-form-item>
              <el-form-item label="手机号：" prop="phoneNum">
                <el-input v-show="showvalue" v-model.trim="form.phoneNum" class="input-width" />
                <span v-show="!showvalue">{{ form.phoneNum }}</span>
              </el-form-item>
              <el-form-item label="邮箱：" prop="email">
                <el-input v-show="showvalue" v-model.trim="form.email" class="input-width" />
                <span v-show="!showvalue">{{ form.email }}</span>
              </el-form-item>
              <el-form-item label="出生日期：">
                <div class="block">
                  <el-date-picker v-show="showvalue" v-model="form.birthDate" type="date" placeholder="选择日期" :picker-options="pickOptions" />
                </div>
                <span v-show="!showvalue">{{ form.birthDate | formatDateTime }}</span>
              </el-form-item>
            </div>
          </el-col>
          <br>
          <el-col :span="6" :offset="5">
            <div>
              <el-form-item label="工作时间：">
                <span>{{ form.entryTime | formatDateTime }}</span>
              </el-form-item>
              <el-form-item label="学历：">
                <el-select v-show="showvalue" v-model="form.degree" class="input-width" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <span v-show="!showvalue">{{ form.degree }}</span>
              </el-form-item>
              <el-form-item label="毕业院校：" prop="school">
                <el-input v-show="showvalue" v-model.trim="form.school" class="input-width" />
                <span v-show="!showvalue">{{ form.school }}</span>
              </el-form-item>
              <el-form-item label="主要技能：">
                <el-input v-show="showvalue" v-model="form.primarySkill" type="textarea" rows="3" maxlength="200" show-word-limit />
                <span v-show="!showvalue" style="width:50% ;word-break: break-word;">{{ form.primarySkill }}</span>
              </el-form-item>
            </div>
          </el-col>
        </el-form>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button v-show="!showvalue" type="primary" size="small" @click="modifyBtn()">编辑</el-button>
        <el-button v-show="!showvalue" size="small" @click="handleback()">返回</el-button>
        <el-button v-show="showvalue" size="small" @click="cancelBtn()">取消</el-button>
        <el-button v-show="showvalue" type="primary" size="small" @click="Update()">确认</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { formatDate } from '@/utils/date'
import { validatePhone, validateEMail } from '@/utils/validate'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  // 转换时间
  filters: {
    formatDateTime (time) {
      if (time == null || time === '') {
        return ''
      }
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  data () {
    return {
      squareUrl: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
      form: {
        nickName: 'admin',
        sex: 0,
        phoneNum: 13345676756,
        email: '123@qq.com',
        birthDate: '2000-1-1',
        entryTime: '2022-11-11',
        degree: '本科',
        school: '清华大学'
      },
      fileUrl: '', // 头像url
      showvalue: false,
      loading: false,
      cardLoading: false,
      avataLoading: false,
      radio: '',
      options: [{ value: 0, label: '大专' }],
      rules: {
        phoneNum: [{ validator: validatePhone, trigger: 'blur' }],
        school: [{ max: 20, message: '长度不超过20个字', trigger: 'blur' }],
        email: [{ validator: validateEMail, trigger: 'blur' }
        ]
      },
      // 时间范围限制
      pickOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now() - 8.64e6
        }
      }
    }
  },
  created () {
  },
  mounted () { },
  methods: {
    // 修改按钮
    modifyBtn () {
      this.showvalue = true
    },
    handleback () {
      this.$router.push({
        path: '/'
      })
    },
    // 上传头像
    async handleFileUpload (val) {
      this.avataLoading = true
    },
    // 头像移除时的钩子
    handleRemove () {
      this.squareUrl = ''
      this.$refs['my-upload'].clearFiles()
    },
    // 头像加载失败时
    errorHandler () {
      return true
    },
    // 提交修改
    Update () {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          this.loading = true
        }
      })
    },
    // 取消修改
    cancelBtn () {
      this.showvalue = false
    }
  }
}
</script>

<style scoped>
@import url("~@/styles/person.css");
</style>
