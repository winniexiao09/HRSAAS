import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// 在svg-icon全局组价中使用
Vue.component('svg-icon', SvgIcon)

// 1.读取所有.svg后缀的文件,导入到项目中
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
