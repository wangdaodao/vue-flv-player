<template>
  <video class="flv-player" v-bind="$attrs" ref="flvPlayer"></video>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 组件名称 from '组件路径';
import flvjs from 'flv.js'

export default {
  name: 'vue-flv-player',
  //引入组件
  props: {
    mediaDataSource: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: false
    },
    autoplay: {
      type: Boolean,
      required: false
    },
    poster: {
      type: String,
      required: false
    },
  },
  //引入混淆
  mixins: [],
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      isSupported: null,
      flvPlayer: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    constructor: function (mediaDataSource, config) {
      this.flvPlayer.constructor(mediaDataSource, config)
    },
    destroy: function () {
      this.flvPlayer.destroy()
    },
    on: function (event, listener) {
      this.flvPlayer.on(event, listener)
    },
    off: function (event, listener) {
      this.flvPlayer.off(event, listener)
    },
    load: function () {
      this.flvPlayer.load()
      this.state.load = true
      if (this.autoplay) {
        this.play()
      }
    },
    unload: function () {
      this.flvPlayer.unload()
      this.state.load = false
    },
    play: function () {
      this.state.load || this.load()
      this.flvPlayer.play()
    },
    pause: function () {
      this.flvPlayer.pause()
    },
    refresh: function () {
      this.pause()
      this.unload()
      this.play()
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.isSupported = flvjs.isSupported();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if(this.isSupported){
      let videoElement = this.$refs.flvPlayer;
      this.flvPlayer = flvjs.createPlayer(this.mediaDataSource, this.config)
      this.flvPlayer.attachMediaElement(videoElement)
    }
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>

<style lang='scss'>
div{
  text-align: center;
}
</style>