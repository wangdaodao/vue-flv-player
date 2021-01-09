<template>
  <div id="app">
    <button @click="change(1)">FLV</button>
    <button @click="change(2)">MP4</button>
    <flv-player width="300" height="200" controls autoplay :muted="true" :source="src" :type="type"/>
  </div>
</template>

<script>
import flvPlayer from './components/index.js';

export default {
  name: 'App',
  components: {
    flvPlayer,
  },
  data() {
    return {
      type: '',
      src: '',
    };
  },
  methods: {
    change(val){
      switch (val) {
        case 1:
          this.type = 'flv';
          this.src = 'http://resource.wangdaodao.com/test.flv';
          break;
        case 2:
          this.type = 'mp4';
          this.src = 'http://vjs.zencdn.net/v/oceans.mp4';
          break;
      }
    }
  }
};
</script>
