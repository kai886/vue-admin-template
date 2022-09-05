<template>
  <div>
    <!-- websocket页面数据实时刷新 -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-alert type="success" :closable="false">
          webSocket连接{{ status }}！
        </el-alert>
        <br />
        <el-form ref="form" :rules="rules" label-width="100px">
          <el-form-item label="地址">
            <el-input v-model="wsuri" disabled></el-input>
          </el-form-item>
          <el-form-item label="消息" prop="message">
            <el-input v-model="form.message"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="submit">发送消息</el-button>
          </el-form-item>
          <el-form-item label="返回信息汇总">
            {{ data }}
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      status: '',
      websock: null,
      wsuri: '192.168.96.159:8080/websocket',//WebSocket的后台地址
      actiones: { "name": "小明" },//传入后台的数据
      form: { message: null },
      data: [],
      rules: {
        message: [{ required: true, message: '请输入消息', trigger: 'blur' }],
      },
    }
  },
  created () {
    this.initWebSocket();//开启WebSocket
  },
  destroyed () {
    this.websock.close()//页面销毁时关闭长连接
  },
  methods: {
    submit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.websocketonopen(this.form.message)
        } else {
          return false
        }
      })
    },
    initWebSocket () {
      //初始化weosocket
      const wsuri = "ws://" + this.wsuri;
      this.websock = new WebSocket(wsuri);
      // 收到消息的回调
      this.websock.onmessage = this.websocketonmessage;
      // 连接成功
      this.websock.onopen = this.websocketonopen;
      // 连接错误
      this.websock.onerror = this.websocketonerror;
      // 连接关闭的回调
      this.websock.onclose = this.websocketclose;
    },
    //连接建立之后执行send方法发送数据
    websocketonopen (data) {
      if (data) {
        this.status = '成功'
        //data下的actiones属性有值就会调用，把值传入后台
        this.websocketsend(JSON.stringify(data));
      }
    },
    //连接建立失败重连
    websocketonerror () {
      this.status = '失败'
      this.initWebSocket();
    },
    //数据接收
    websocketonmessage (e) {
      const redata = JSON.parse(e.data);
      console.log(e)
    },
    //数据发送
    websocketsend (Data) {
      this.websock.send(Data);
    },
    //关闭 websocket
    websocketclose (e) {
      console.log('断开连接', e);
    },
  },
}
</script>
<style lang='less'>
</style>