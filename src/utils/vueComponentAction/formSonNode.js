// #region special
export const specialFormSonNode = [
  {
    type: 'select',
    style: 'ui',
    param: 'orgId',
    label: '',
    class: 'yyy',
    placeholder: '所有机构'
  },
  {
    label: '',
    type: 'picker',
    rangeSeparator: '至',
    startPlaceholder: '开始时间',
    endPlaceholder: '结束时间',
    param: 'time',
    pickerType: 'daterange'
  },
  {
    type: 'button',
    title: '查询',
    face: 'primary',
    label: '',
    icon: '',
    handleName: 'handleSearch',
    icon: 'el-icon-search'
  },
  {
    type: 'button',
    title: '重置',
    face: '',
    label: '',
    icon: '',
    icon: 'el-icon-refresh',
    handleName: 'handleClear'

  },
  {
    type: 'button',
    title: '连续日期批量新增/编辑',
    face: 'primary',
    label: '',
    icon: 'el-icon-plus',
    handleName: 'handleAdd'
  }
]

export const organAddFormSonNodeSpecial = [
  {
    type: 'select',
    style: 'ui',
    param: 'orgId',
    label: '机 构',
    class: 'yyy',
    placeholder: '请选择机构'
  },
  {
    type: 'picker',
    style: 'ui',
    param: 'specialWorkday',
    label: '工作日',
    pickerType: 'date',
    placeholder: '选择日期'
  },
  {
    type: 'checkbox',
    label: '是否上班'
  }

]

export const editSpecialFormSonNodeSpecial = [
  {
    type: 'select',
    style: 'ui',
    param: 'name',
    label: '机 构',
    class: 'yyy',
    isDisabled: true
  },
  {
    type: 'picker',
    style: 'ui',
    param: 'specialWorkday',
    label: '工作日',
    pickerType: 'date'
  },
  {
    type: 'checkbox',
    label: '是否上班'
  }
]
// #endregion

// #region normalDay
export const normalDayFormSonNode = [
  {
    type: 'select',
    style: 'ui',
    param: 'name',
    label: '',
    class: 'yyy',
    placeholder: '所有机构',
    options: []
  },
  {
    type: 'button',
    title: '查询',
    face: 'primary',
    label: '',
    icon: '',
    handleName: 'handleSearch',
    icon: 'el-icon-search'
  },
  {
    type: 'button',
    title: '重置',
    face: '',
    label: '',
    icon: '',
    icon: 'el-icon-refresh',
    handleName: 'handleClear'
  },
  {
    type: 'button',
    title: '连续日期批量新增/编辑',
    face: 'primary',
    label: '',
    icon: 'el-icon-plus',
    handleName: 'handleAdd'
  }
]

export const organAddFormSonNodeNormalDay = [
  {
    type: 'select',
    style: 'ui',
    param: 'name',
    label: '机构名称',
    class: 'yyy'
  },
  {
    type: 'checkboxGroup',
    style: '',
    param: 'jigou',
    label: '工作日',
    class: 'yyy',
    checkboxGroup: [
      {
        name: '周一',
        value: 1
      }, {
        name: '周二',
        value: 2
      }, {
        name: '周三',
        value: 3
      }, {
        name: '周四',
        value: 4
      }, {
        name: '周五',
        value: 5
      }, {
        name: '周六',
        value: 6
      }, {
        name: '周日',
        value: 7
      }
    ]
  }
]

export const editSpecialFormSonNodeNormalDay = [
  {
    type: 'select',
    style: 'ui',
    param: 'name',
    label: '机构名称',
    class: 'yyy',
    isDisabled: true
  },
  {

    type: 'checkboxGroup',
    style: '',
    param: 'jigou',
    label: '工作日',
    class: 'yyy',
    checkboxGroup: [
      {
        name: '周一',
        value: 1
      }, {
        name: '周二',
        value: 2
      }, {
        name: '周三',
        value: 3
      }, {
        name: '周四',
        value: 4
      }, {
        name: '周五',
        value: 5
      }, {
        name: '周六',
        value: 6
      }, {
        name: '周日',
        value: 7
      }
    ]
  }
]
// #endregion
