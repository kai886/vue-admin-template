<template>
  <div class="map-container">
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="container" @click="getClickInfo" :scroll-wheel-zoom='true'>
    </baidu-map>
  </div>
</template>

<script>
//局部注册   百度地图
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'

export default {
  name: 'TestBaiDu',
  components: {
    BaiduMap
  },
  data () {
    return {
      center: { lng: 120.738357, lat: 27.977083 },
      zoom: 13
    }
  },
  methods: {
    handler ({ BMap, map }) {
      var point = new BMap.Point(120.738357, 27.977083)
      map.centerAndZoom(point, 13)
      // map.setMapStyleV2({
      //   styleId: 'c97ad46b735d00b1cedd3a88ba0bf75c'
      // });
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
  }
}
</script>

<style lang="scss" scoped>
.map-container {
  .container {
    width: 100%;
    height: calc(100vh - 214px);
  }
}
</style>