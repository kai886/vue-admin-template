<template>
  <div>
    <FullCalendar id="calendar" ref="fullCalendar" class="demo-app-calendar" :options="calendarOptions">
      <template v-slot:eventContent="arg">
        <el-popover placement="top-start" title="标题" width="200" :visible-arrow="false" trigger="hover">
          <i class="title">{{ arg.event.title }}</i>
          <div slot="reference" class="popper-content">
            <span>{{ arg.timeText }}</span>
            <i>{{ arg.event.title }}</i>
            <i>{{ arg.event.title }}</i>
          </div>
        </el-popover>
      </template>
    </FullCalendar>
  </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

export default {
  components: {
    FullCalendar,
  },
  data () {
    return {
      type: "dategrid",
      calendarOptions: {
        locale: "zh",
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, resourceTimelinePlugin, interactionPlugin,],
        initialView: "customGridWeek",
        resourceAreaWidth: 200,
        contentHeight: 600,
        slotMinWidth: 70,
        resourceOrder: "number",
        slotLabelFormat: "HH:mm", //标签时间格式化
        eventTimeFormat: "HH:mm", //日程时间格式化
        slotMinTime: "09:00:00", // 开始时间
        slotMaxTime: "19:00:00", // 结束时间
        slotDuration: '00:15:00',
        allDaySlot: false, //不显示all-day（全天）
        firstDay: 1, //设置一周中显示的第一天是哪天，周日是o，周一是1，类推
        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        eventDurationEditable: true, // 可以调整事件的时间
        selectable: true, // 日历格子可选择
        nowIndicator: true, // 现在的时间线显示
        eventDisplay: "block", // 争对全天的情况下，以块状显示
        headerToolbar: false, // 隐藏头部的导航栏
        selectMirror: false,
        displayEventEnd: true, // like 08:00 - 13:00
        eventTimeFormat: {
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false, // 设置时间为24小时
        },
        events: [

        ],
        eventColor: "#378006", // 全部日历日程背景色
        resourceAreaHeaderContent: "Rooms",
        schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
        views: {
          customGridWeek: {
            type: "timeGridWeek",
            slotLabelFormat: {
              // 左侧时间格式
              hour: "2-digit",
              minute: "2-digit",
              meridiem: "lowercase",
              hour12: false, // false设置时间为24小时
            },
          },
        },
      },
      calendarApi: null,
      weekEvent: [
        {
          id: "number_1",
          resourceId: "number_1",
          title: '一号会议室', // 事件内容
          start: '2022-08-28 12:23:00', // 事件开始时间
          end: '2022-08-28 13:23:00', // 事件结束时间
          cssClass: 'red'// 事件的样式 class名（由后台返回数据） red为自己定义的class名
        },
      ],
      // 事件
      eventClick: this.handleEventClick, // 点击日历日程事件
      eventDblClick: this.handleEventDblClick, // 双击日历日程事件 (这部分是在源码中添加的)
      eventClickDelete: this.eventClickDelete, // 点击删除标签事件 (这部分是在源码中添加的)
      eventDrop: this.eventDrop, // 拖动日历日程事件
      eventResize: this.eventResize, // 修改日历日程大小事件
      select: this.handleDateSelect, // 选中日历格事件
      eventDidMount: this.eventDidMount, // 安装提示事件
      // loading: this.loadingEvent, // 视图数据加载中、加载完成触发（用于配合显示/隐藏加载指示器。）
      // selectAllow: this.selectAllow, //编程控制用户可以选择的地方，返回true则表示可选择，false表示不可选择
      eventMouseEnter: this.eventMouseEnter, // 鼠标滑过
      allowContextMenu: false,
      editable: true, // 是否可以进行（拖动、缩放）修改
      eventStartEditable: true, // Event日程开始时间可以改变，默认true，如果是false其实就是指日程块不能随意拖动，只能上下拉伸改变他的endTime
      eventDurationEditable: true, // Event日程的开始结束时间距离是否可以改变，默认true，如果是false则表示开始结束时间范围不能拉伸，只能拖拽
      selectable: true, // 是否可以选中日历格
      selectMirror: true,
      selectMinDistance: 0, // 选中日历格的最小距离
      dayMaxEvents: true,
      weekends: true,
      navLinks: true, // 天链接
      selectHelper: false,
      slotEventOverlap: false // 相同时间段的多个日程视觉上是否允许重叠，默认true允许
    };
  },
  mounted () {
    this.calendarApi = this.$refs.fullCalendar.getApi();
    this.title = this.calendarApi.view?.title;
    // 模拟动态获取数据
    this.getDtata();
  },
  methods: {
    getDtata () {
      this.calendarOptions.events = this.weekEvent;
    },
    prev () {
      this.calendarApi.prev();
      this.title = this.calendarApi.view?.title;
    },
    next () {
      this.calendarApi.next();
      this.title = this.calendarApi.view?.title;
    },
  },
};
</script>
<style>
.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}
.demo-app-sidebar-section {
  padding: 2em;
}
.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}
.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
.fc-toolbar {
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-content: center;
}
.fc-center {
  display: flex;
  align-content: center;
}
.fc-center .title {
  font-size: 16px;
  padding: 0 15px;
  font-weight: 700;
}
</style>