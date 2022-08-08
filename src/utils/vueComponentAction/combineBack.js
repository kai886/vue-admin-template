// 控制表单行为
import { specialBehaviorControl, organAddBehaviorControlSpecial, editSpecialControlSpecial, normalDayBehaviorControl, organAddBehaviorControlNormalDay, editSpecialControlNormalDay } from '@/utils/vueComponentAction/behaviorControl'

// 表单内子元素体
import { specialFormSonNode, organAddFormSonNodeSpecial, editSpecialFormSonNodeSpecial, normalDayFormSonNode, organAddFormSonNodeNormalDay, editSpecialFormSonNodeNormalDay } from '@/utils/vueComponentAction/formSonNode'

// 表格行为
import { specialPrincipalControl, normalDayPrincipalControl } from '@/utils/vueComponentAction/principalControl'

// 表格子节点
import { specialTableSonNode, normalDayTableSonNode } from '@/utils/vueComponentAction/tableSonNode'

// #region special
export const special = {
  specialBehaviorControl,
  specialFormSonNode,
  specialTableSonNode,
  specialPrincipalControl
}

export const organAddSpecial = {
  organAddBehaviorControlSpecial,
  organAddFormSonNodeSpecial
}

export const editSpecial = {
  editSpecialControlSpecial,
  editSpecialFormSonNodeSpecial
}
// #endregion

// #region normalDay
export const normalDay = {
  normalDayBehaviorControl,
  normalDayFormSonNode,
  normalDayTableSonNode,
  normalDayPrincipalControl
}

export const organAddNormalDay = {
  organAddBehaviorControlNormalDay,
  organAddFormSonNodeNormalDay
}

export const editNormalDay = {
  editSpecialFormSonNodeNormalDay,
  editSpecialControlNormalDay
}
// #endregion
