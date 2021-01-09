<template>
  <video class="flv-player" v-bind="$attrs" ref="flvPlayer"></video>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 组件名称 from '组件路径';
import flvjs from 'flv.js';

export default {
  name: 'vue-flv-player',
  //引入组件
  props: {
    source: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'flv',
      required: true,
    },
    mediaDataSource: {
      type: Object,
      default: () => {},
    },
    config: {
      type: Object,
      default: () => {},
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
      flvPlayer: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    source(val) {
      if (val) {
        this.init();
      }
    },
  },
  //方法集合
  methods: {
    constructor: function (mediaDataSource, config) {
      this.flvPlayer.constructor(mediaDataSource, config);
    },
    init() {
      if (this.isSupported && this.source && this.type) {
        let videoElement = this.$refs.flvPlayer;
        this.flvPlayer = flvjs.createPlayer(
          { url: this.source, type: this.type, ...this.mediaDataSource },
          this.config
        );
        this.flvPlayer.attachMediaElement(videoElement);
        this.load();
      }
    },
    on(event, listener) {
      this.flvPlayer.on(event, listener);
    },
    off(event, listener) {
      this.flvPlayer.off(event, listener);
    },
    load() {
      this.flvPlayer.load();
    },
    unload() {
      this.flvPlayer.unload();
    },
    play() {
      this.flvPlayer.play();
    },
    pause() {
      this.flvPlayer.pause();
    },
    reset() {
      this.pause();
      this.unload();
    },
    destroy() {
      this.flvPlayer.destroy();
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.isSupported = flvjs.isSupported();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.init();
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
  destroyed() {
    if (this.flvPlayer) {
      this.pause();
      this.unload();
      this.destroy();
      this.flvPlayer = null;
    }
  },
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>

<style lang='scss'>
</style>