<template>
  <div class="form">
    <el-form :inline="behaviorControl.inline" :model="formData" :class="behaviorControl.class" :label-width="behaviorControl.labelWidth">
      <el-form-item v-for="(formItem, index) in formSonNode" :key="index" :label="formItem.label">
        <!-- input -->
        <el-input v-if="formItem.type === 'input'" v-model.trim="formData[`${formItem.param}`]" :style="formItem.style" :class="formItem.class" :type="formItem.isTextarea ? 'textarea' : ''" />
        <!-- select -->
        <el-select v-else-if="formItem.type === 'select'" v-model.trim="formData[`${formItem.param}`]" :disabled="formItem.isDisabled" :multiple="formItem.isMultiple" :placeholder="formItem.placeholder" :class="formData.class">
          <el-option v-for="(option_formItem, index) in formItem.options" :key="index" :label="option_formItem.label" :value="option_formItem.value" />
        </el-select>
        <!-- picker -->
        <el-date-picker v-else-if="formItem.type === 'picker'" v-model.trim="formData[`${formItem.param}`]" :type="formItem.pickerType" :range-separator="formItem.rangeSeparator" :start-placeholder="formItem.startPlaceholder" :end-placeholder="formItem.endPlaceholder" :placeholder="formItem.placeholder" />
        <!-- checkbox -->
        <el-checkbox-group v-else-if="formItem.type === 'checkboxGroup'" v-model="checkboxGroupList" @change="returnCheckboxGroupValue(formItem.handleName)">
          <el-checkbox v-for="(checkboxItem, index) in formItem.checkboxGroup" :key="index" :label="checkboxItem.value">{{ checkboxItem.name }}</el-checkbox>
        </el-checkbox-group>
        <el-checkbox v-else-if="formItem.type === 'checkbox'" v-model="checkboxGroupList" label="1" @change="returnCheckboxGroupValue(formItem.handleName)">上班</el-checkbox>
        <!-- button -->
        <el-button v-else-if="formItem.type === 'button'" :class="formData.class" :type="formItem.face" :icon="formItem.icon" @click="emitFather(formItem.handleName, formItem.isDataInvolved)">
          {{ formItem.title }}
        </el-button>
        <span v-else />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SanForm',
  props: {
    // 控制表单行为
    behaviorControl: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 绑定表单数据
    formData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 表单内子元素体
    formSonNode: {
      type: Array,
      default: () => {
        return []
      }
    },
    fatherCheckboxGroupList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data() {
    return {
      checkboxGroupList: []
    }
  },
  created() {
    this.checkboxGroupList = this.fatherCheckboxGroupList
  },
  methods: {
    // 通知父组件
    emitFather(handleName) {
      this.$emit('disposeSonHandle', handleName)
    },
    returnCheckboxGroupValue() {
      console.log(122)
      this.$emit('getCheckboxGroupValue', this.checkboxGroupList)
    }
  }
}
</script>

<style scoped>
@import url("~@/styles/common.scss");
</style>
