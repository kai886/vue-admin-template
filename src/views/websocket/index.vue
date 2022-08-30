<template>
  <div>
    <!-- websocket页面数据实时刷新 -->
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      websock: null,
      wsuri: '192.168.124.18:9091/webSocket',//WebSocket的后台地址
      actiones: { "name": "小明" },//传入后台的数据
    }
  },
  created () {
    this.initWebSocket();//开启WebSocket
  },
  destroyed () {
    this.websock.close()//页面销毁时关闭长连接
  },
  methods: {
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
    websocketonopen () {
      if (this.actiones) {//data下的actiones属性有值就会调用，把值传入后台
        this.websocketsend(JSON.stringify(this.actiones));
      }
    },
    //连接建立失败重连
    websocketonerror () {
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