# Vue-Flv-Player 播放器

![NPM version](https://img.shields.io/npm/v/vue-flv-player.svg) ![GitHub stars](https://img.shields.io/github/stars/wangdaodao/vue-flv-player.svg) ![GitHub issues](https://img.shields.io/github/issues/wangdaodao/vue-flv-player.svg) ![GitHub forks](https://img.shields.io/github/forks/wangdaodao/vue-flv-player.svg)

* 😊 基于 Vue + [`flv.js`](https://github.com/Bilibili/flv.js) 开发；
* 😂 支持现代浏览器；
* 😂 使用时，请确保浏览器已经安装[flash播放器](https://www.flash.cn/cdm/latest/flashplayer_install_cn.exe)；

## NPM安装

```bash
npm i vue-flv-player --save
```

## CDN引用

目前可以通过 [unpkg.com/vue-flv-player](https://unpkg.com/vue-flv-player) 或者 [www.jsdelivr.com/package/npm/vue-flv-player](https://www.jsdelivr.com/package/npm/vue-flv-player) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-flv-player/dist/vue-flv-player.umd.min.js"></script>

<!-- 或者 -->
<script src="https://cdn.jsdelivr.net/npm/vue-flv-player/dist/vue-flv-player.umd.min.js"></script>
```

## 使用

### 全局使用

```js
// main.js
import Vue from 'vue'
import App from './App.vue'

import vueFlvPlayer from 'vue-flv-player'
Vue.use(vueFlvPlayer)
```

```vue
<template>
  <div id="app">
    <vue-flv-player :autoplay="true" :controls="true" :muted="true" ref="myPlayer" :source="src" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      src:"http://resource.wangdaodao.com/test.flv"
    };
  }
};
</script>
```

### 局部使用

```vue
<template>
  <div id="app">
    <vue-flv-player :autoplay="true" :controls="true" :muted="true" ref="myPlayer" :source="src"/>
  </div>
</template>

<script>
import vueFlvPlayer from 'vue-flv-player'

export default {
  name: 'App',
  components: {
    vueFlvPlayer,
  },
  data() {
    return {
      src:"http://resource.wangdaodao.com/test.flv"
    };
  }
};
</script>
```

## FLV

[FLV例子](http://demo.const.team/flv/flv.html)

```vue
<template>
  <div>
    <vue-flv-player :autoplay="true" :controls="true" :muted="true" ref="myPlayer" :source="src"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src:"http://resource.wangdaodao.com/test.flv"
    };
  }
};
</script>
```

## MP4

[MP4](http://demo.const.team/flv/mp4.html)

```vue
<template>
  <div>
    <vue-flv-player controls autoplay :muted="true" :source="src" type="mp4"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "http://vjs.zencdn.net/v/oceans.mp4",
    };
  },
};
</script>
```

## 切换类型

[切换类型](http://demo.const.team/flv/all.html)

```vue
<template>
  <div>
    <button @click="change(1)">FLV</button>
    <button @click="change(2)">MP4</button>
    <vue-flv-player controls autoplay :muted="true" :source="src" :type="type"/>
  </div>
</template>

<script>
export default {
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
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| source | 播放流 | string | — | — |
| type | 流类型 | string | `mp4`/`flv` | `flv` |
| width | 宽度 | number | — | 800 |
| height | 高度 | number | — | 600 |
| poster | 视频封面 | string | — | — |
| muted | 是否静音 | boolean | — | false |
| autoplay | 是否自动播放 | boolean | — | false |
| controls | 是否显示控件 | boolean | — | false |
| preload | 预加载 | string | auto/metadata/none | auto |
| mediaDataSource | 高级媒体数据源设置 | Object | — | — |
| config | 高级设置 | Object | — | — |

### mediaDataSource
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type | 流类型 | string | `mp4`/`flv` | `flv` |
| isLive | 指示数据源是否为**实时流** | boolean | — | — |
| cors | 是否为http获取启用`CORS` | boolean | — | — |
| withCredentials | 发送跨域请求凭据 | boolean | — | — |
| hasAudio | 指示流是否有音频曲目 | boolean | — | — |
| hasVideo | 指示流是否有视频曲目 | boolean | — | — |
| duration | 总媒体持续时间，单位为**毫秒** | number | — | — |
| filesize | 表示媒体文件的总文件大小| number | — | — |
| url | 媒体URL，设置后覆盖 `source` | string | `https(s)` / `ws(s)` | — |
| segments | 多部分播放，请参见**MediaSegment**  | Array | — | — |

### MediaSegment
| 参数       | 类型     | 说明                              |
| ----------- | -------- | ---------------------------------------- |
| duration  | number | 必填字段，表示以**毫秒为单位的段持续时间** |
| filesize | number | 可选字段，表示段文件大小 |
| url      | string | 必填字段，表示段文件URL |

### Config

| 参数                            | 类型      | 默认值                      | 说明                              |
| -------------------------------- | --------- | ---------------------------- | ---------------------------------------- |
| `enableWorker?`                  | `boolean` | `false`                      | Enable separated thread for transmuxing (unstable for now) |
| `enableStashBuffer?`             | `boolean` | `true`                       | Enable IO stash buffer. Set to false if you need realtime (minimal latency) for live stream playback, but may stalled if there's network jittering. |
| `stashInitialSize?`              | `number`  | `384KB`                      | Indicates IO stash buffer initial size. Default is `384KB`. Indicate a suitable size can improve video load/seek time. |
| `isLive?`                        | `boolean` | `false`                      | Same to `isLive` in **MediaDataSource**, ignored if has been set in MediaDataSource structure. |
| `lazyLoad?`                      | `boolean` | `true`                       | Abort the http connection if there's enough data for playback. |
| `lazyLoadMaxDuration?`           | `number`  | `3 * 60`                     | Indicates how many seconds of data to be kept for `lazyLoad`. |
| `lazyLoadRecoverDuration?`       | `number`  | `30`                         | Indicates the `lazyLoad` recover time boundary in seconds. |
| `deferLoadAfterSourceOpen?`      | `boolean` | `true`                       | Do load after MediaSource `sourceopen` event triggered. On Chrome, tabs which be opened in background may not trigger `sourceopen` event until switched to that tab. |
| `autoCleanupSourceBuffer`        | `boolean` | `false`                      | Do auto cleanup for SourceBuffer         |
| `autoCleanupMaxBackwardDuration` | `number`  | `3 * 60`                     | When backward buffer duration exceeded this value (in seconds), do auto cleanup for SourceBuffer |
| `autoCleanupMinBackwardDuration` | `number`  | `2 * 60`                     | Indicates the duration in seconds to reserve for backward buffer when doing auto cleanup. |
| `fixAudioTimestampGap`           | `boolean` | `true`                       | Fill silent audio frames to avoid a/v unsync when detect large audio timestamp gap. |
| `accurateSeek?`                  | `boolean` | `false`                      | Accurate seek to any frame, not limited to video IDR frame, but may a bit slower. Available on `Chrome > 50`, `FireFox` and `Safari`. |
| `seekType?`                      | `string`  | `'range'`                    | `'range'` use range request to seek, or `'param'` add params into url to indicate request range. |
| `seekParamStart?`                | `string`  | `'bstart'`                   | Indicates seek start parameter name for `seekType = 'param'` |
| `seekParamEnd?`                  | `string`  | `'bend'`                     | Indicates seek end parameter name for `seekType = 'param'` |
| `rangeLoadZeroStart?`            | `boolean` | `false`                      | Send `Range: bytes=0-` for first time load if use Range seek |
| `customSeekHandler?`             | `object`  | `undefined`                  | Indicates a custom seek handler          |
| `reuseRedirectedURL?`            | `boolean` | `false`                      | Reuse 301/302 redirected url for subsequence request like seek, reconnect, etc. |
| `referrerPolicy?`                | `string`  | `no-referrer-when-downgrade` | Indicates the [Referrer Policy][] when using FetchStreamLoader |
| `headers?`                       | `object`  | `undefined`                  | Indicates additional headers that will be added to request |

更多配置，请看 `flv.js` [官方文档](https://github.com/bilibili/flv.js/blob/master/docs/api.md)

### Methods
| 方法名      | 说明    | 参数        |
|----------   |--------|----------   |
| play        | 播放   |             |
| pause       | 暂停   |             |
| dispose     | 销毁   |             |