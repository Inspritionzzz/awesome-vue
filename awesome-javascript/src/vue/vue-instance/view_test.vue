<template>
<el-form :model="firstFormData" :inline="true" size="small">
    <el-form-item label="月份:" prop="month">
        <el-date-picker
                v-model="firstFormData.month"
                type="month"
                value-format="yyyy-MM"
        />
    </el-form-item>
    <el-form-item label="机构级别:" prop="orgLevel">
        <el-select v-model="firstFormData.orgLevel">
            <el-option value="1" label="分公司" />
            <el-option value="2" label="营业部" />
        </el-select>
    </el-form-item>
    <el-form-item>
        <el-button type="danger">查询</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

