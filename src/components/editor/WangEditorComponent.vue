<template>
  <div>
    <div :id="params.id"></div>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
  name: 'wangEditor',
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      localEditor: null
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    // 初始化富文本编辑框
    initEditor() {
      const editor = new E(`#${this.params.id}`)
      let editorParams = {}
      if (Object.keys(this.params.params).length) {
        editorParams = Object.assign(editorParams, this.params.params)
      }
      if (this.params.customImgUpload.flag) {
        editorParams = Object.assign(
          editorParams,
          this.params.customImgUpload.methods
        )
      }
      if (this.params.customVideoUpload.flag) {
        editorParams = Object.assign(
          editorParams,
          this.params.customVideoUpload.methods
        )
      }
      editor.config = Object.assign(editor.config, editorParams)
      editor.create()
      this.localEditor = editor
    },
    // 光标处插入内容
    insertContentByCursor(data) {
      this.localEditor.cmd.do('insertHTML', data)
    },
    // 初始化设置富文本编辑框内容
    initEditorContent(data) {
      this.localEditor.txt.html(data)
    },
    // 富文本框追加内容
    appendContentByLast(data) {
      this.localEditor.txt.append(data)
    },
    // 获取富文本框Html内容
    getHtmlContent() {
      return this.localEditor.txt.html()
    },
    // 获取富文本框文本内容
    getTextContent() {
      return this.localEditor.txt.text()
    },
    // 获取选中文本
    getSelectText() {
      return this.localEditor.selection.getSelectionText()
    },
    // 判断是否选中文本
    isSelectText() {
      return this.localEditor.selection.isSelectionEmpty()
    },
    // 清空编辑器内容
    clearEditorContent() {
      this.localEditor.txt.clear()
    },
    // 禁用编辑器
    disableEditor() {
      this.localEditor.disable()
    },
    // 解除禁用编辑器
    enableEditor() {
      this.localEditor.enable()
    },
    // 销毁编辑器
    destroyEditor() {
      this.localEditor.destroy()
      this.localEditor = null
    }
  }
}
</script>
