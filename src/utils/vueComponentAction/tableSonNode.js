export const specialTableSonNode = {
  list: [
    {
      prop: 'name',
      label: '机构名称',
      isText: true
    },
    {
      prop: 'specialWorkday',
      label: '特殊工作日',
      isText: true
    },
    {
      prop: 'isWork',
      label: '是否上班',
      isIcon: true
    }
  ],
  isShowOperation: true,
  table_button: [
    {
      type: '',
      title: '编辑',
      handleName: 'handleEdit',
      size: 'mini'
    },
    {
      type: 'danger',
      title: '删除',
      handleName: 'handleDelete',
      size: 'mini'
    }
  ]
}

export const normalDayTableSonNode = {
  list: [
    {
      prop: 'name',
      label: '机构名称',
      isText: true
    },
    {
      prop: 'mon',
      label: '周一',
      isIconNormal: true
    },
    {
      prop: 'tue',
      label: '周二',
      isIconNormal: true
    },
    {
      prop: 'wed',
      label: '周三',
      isIconNormal: true
    },
    {
      prop: 'thu',
      label: '周四',
      isIconNormal: true
    },
    {
      prop: 'fir',
      label: '周五',
      isIconNormal: true
    },
    {
      prop: 'sat',
      label: '周六',
      isIconNormal: true
    },
    {
      prop: 'sun',
      label: '周日',
      isIconNormal: true
    }
  ],
  isShowOperation: true,
  table_button: [
    {
      type: '',
      title: '编辑',
      handleName: 'handleEdit',
      size: 'mini'
    },
    {
      type: 'danger',
      title: '删除',
      handleName: 'handleDelete',
      size: 'mini'
    }
  ]
}
