import vueFlvPlayer from './index.vue'

vueFlvPlayer.install = function (Vue) {
  Vue.component(vueFlvPlayer.name, vueFlvPlayer)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.vueFlvPlayer = vueFlvPlayer;
  window.Vue.use(vueFlvPlayer);
}

export default vueFlvPlayer
