import { application } from '@/conf/config'

/**
 * 过滤数据是否有效，无效数据占位
 * @param {*} val
 */
const isValid = (val) => {
  let value = ''
  if (val.trim()) {
    value = val
  } else {
    value = application.placeholder
  }
  return value
}

export { isValid }
