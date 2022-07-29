import { createI18n } from 'vue-i18n'
import cn from './lang/zh_cn'
import en from './lang/en_us'

const messages = {
  en,
  cn
}

const language = (navigator.language || 'cn').toLocaleLowerCase() // 这是获取浏览器的语言
const i18n = createI18n({
  locale: localStorage.getItem('locale') || language.split('-')[1] || 'cn', // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: 'cn', // 设置备用语言
  messages
})

export default i18n
