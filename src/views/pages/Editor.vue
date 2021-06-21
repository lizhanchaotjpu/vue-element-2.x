<template>
  <div>
    <el-button type="primary" @click="getEvent">测试事件按钮</el-button>
    <div class="editor-style">
      <WangEditor ref="myEditor" :params="localParams"></WangEditor>
    </div>
  </div>
</template>
<script>
import WangEditor from '@/components/editor/WangEditorComponent'
export default {
  name: 'Editor',
  data() {
    return {
      localParams: {
        id: 'test-editor', //富文本框ID
        customImgUpload: {
          flag: true, //是否自定义方法上传图片
          methods: {
            customUploadImg: (resultFiles, insertImgFn) => {
              console.log(resultFiles)
              // resultFiles 是 input 中选中的文件列表
              // insertImgFn 是获取图片 url 后，插入到编辑器的方法
              // 上传图片，返回结果，将图片插入到编辑器中
              // insertImgFn(imgUrl)
            }
          }
        },
        customVideoUpload: {
          flag: true, //是否自定义方法上传视频
          methods: {
            customUploadVideo: (resultFiles, insertVideoFn) => {
              // resultFiles 是 input 中选中的文件列表
              // insertVideoFn 是获取视频 url 后，插入到编辑器的方法
              // 上传视频，返回结果，将视频地址插入到编辑器中
              // insertVideoFn(videoUrl)
            }
          }
        },
        params: {
          focus: true, //自动focus
          placeholder: '请输入正文内容', //placeholder内容提示
          showMenuTooltips: true, //菜单栏提示
          menuTooltipPosition: 'down',
          excludeMenus: [
            //自定义程度比较轻时，可以去除不需要的菜单
            // 'emoticon'
          ],
          // 图片参数配置
          uploadFileName: 'your-custom-fileName', //自定义文件名
          withCredentials: true, // 是否跨域上传
          uploadImgTimeout: 60 * 1000, //超时时间默认10S
          uploadImgServer: '/api/upload/image', //图片上传地址相对路径
          uploadImgMaxSize: 2 * 1024 * 1024, // 2M  图片大小限制
          uploadImgAccept: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'], //图片接收格式限制  []为不限制
          uploadImgMaxLength: 2, //一次最多上传图片数量
          uploadImgParams: {
            //自定义上传参数（如验证token等自定义参数，添加到formData  一起传到服务端）
            token: 'xxxxx',
            x: 100
          },
          uploadImgHeaders: {
            //上传添加http的自定义header
            Accept: 'text/x-json',
            a: 100
          },
          // 视频上传参数配置
          withVideoCredentials: true, // 是否跨域传递
          uploadVideoTimeout: 1000 * 60 * 5, //超时时间 单位毫秒 默认是5分钟
          uploadVideoName: 'your-custom-fileName', //自定义文件名
          uploadVideoServer: '/api/upload-video', // 上传视频地址
          uploadVideoMaxSize: 1 * 1024 * 1024 * 1024, // 1024m 视频上传大小限制
          uploadVideoAccept: ['mp4'], // 视频格式接收限制
          uploadVideoParams: {
            //自定义上传参数（如验证token等自定义参数，添加到formData  一起传到服务端）
            token: 'xxxxx',
            x: 100
          },
          uploadVideoHeaders: {
            //上传添加http的自定义header
            Accept: 'text/x-json',
            a: 100
          },
          // 其余参数自定义配置可以参考文档自行配置
          onchange: this.onchange
        }
      }
    }
  },
  components: { WangEditor },
  methods: {
    getEvent() {
      console.log(this.$refs.myEditor.isSelectText())
      this.$refs.myEditor.insertContentByCursor('<p>21</p>9999')
    },
    onchange(html) {
      console.log(html)
    }
  },
  beforeDestroy() {
    this.$refs.myEditor.destroyEditor()
  }
}
</script>
<style lang="scss" scoped>
.editor-style {
  padding: 30px;
  text-align: left;
}
</style>
