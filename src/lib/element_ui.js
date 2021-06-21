import Vue from 'vue'
import {
  Button,
  Select,
  Input,
  Form,
  FormItem,
  MessageBox,
  Message,
  Notification,
  Loading
} from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(Input)

Vue.use(FormItem)
Vue.use(Loading.directive)
Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 3000
}
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
