<template>
  <div id="app">
    <vue-flv-player />
  </div>
</template>

<script>
import vueFlvPlayer from './components/index.js';

export default {
  name: 'App',
  components: {
    vueFlvPlayer,
  },
  data() {
    return {};
  },
};
</script>
