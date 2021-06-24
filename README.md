# Vue-Flv-Player

![NPM Publish](https://github.com/wangdaodao/vue-flv-player/actions/workflows/npm-publish.yml/badge.svg) ![NPM version](https://img.shields.io/npm/v/vue-flv-player.svg) ![GitHub stars](https://img.shields.io/github/stars/wangdaodao/vue-flv-player.svg) ![GitHub issues](https://img.shields.io/github/issues/wangdaodao/vue-flv-player.svg) ![GitHub forks](https://img.shields.io/github/forks/wangdaodao/vue-flv-player.svg)

* 😊 Vue + [`flv.js`](https://github.com/Bilibili/flv.js);
* 😂 Support for modern browsers;
* 🀄 [中文文档](./README-zh.md)

## Install

### NPM

```bash
npm i vue-flv-player --save
```

### CDN

Get the latest version from [unpkg.com/vue-flv-player](https://unpkg.com/vue-flv-player) or [www.jsdelivr.com/package/npm/vue-flv-player](https://www.jsdelivr.com/package/npm/vue-flv-player) , and import JavaScript and CSS file in your page.

```html
<script src="https://unpkg.com/vue-flv-player/dist/vue-flv-player.umd.min.js"></script>
<!-- or -->
<script src="https://cdn.jsdelivr.net/npm/vue-flv-player/dist/vue-flv-player.umd.min.js"></script>
```

## Quick Start

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
## Example

### FLV

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

### MP4

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

### Change type

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

## Attributes
| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| source | source | string | — | — |
| type | type | string | `mp4`/`flv` | `flv` |
| width | width | number | — | 800 |
| height | height | number | — | 600 |
| poster | Video cover | string | — | — |
| muted | muted | boolean | — | false |
| autoplay | autoplay | boolean | — | false |
| controls | controls | boolean | — | false |
| preload | preload | string | auto/metadata/none | auto |
| mediaDataSource | Media data source settings | Object | — | — |
| config | advanced setting | Object | — | — |

### mediaDataSource
| Attribute      | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type | type | string | `mp4`/`flv` | `flv` |
| isLive | the data source is a live stream | boolean | — | — |
| cors | Indicates whether to enable CORS for http fetching | boolean | — | — |
| withCredentials | Indicates whether to do http fetching with cookies | boolean | — | — |
| hasAudio | Indicates whether the stream has audio track | boolean | — | — |
| hasVideo | Indicates whether the stream has video track | boolean | — | — |
| duration | Indicates total media duration, in milliseconds | number | — | — |
| filesize | Indicates total file size of media file, in bytes| number | — | — |
| url | Indicates media URL, can be starts with 'https(s)' or 'ws(s)' (WebSocket) | string | `https(s)` / `ws(s)` | — |
| segments | Optional field for multipart playback, see MediaSegment  | Array | — | — |

### MediaSegment
| Attribute       | Type     | Description                              |
| ----------- | -------- | ---------------------------------------- |
| duration  | number | Required field, indicates segment duration in milliseconds |
| filesize | number | Optional field, indicates segment file size in bytes |
| url      | string | Required field, indicates segment file URL |

### Config

| Attribute                            | Type      | Default                      | Description                              |
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

More configuration，`flv.js` [flv-api](https://github.com/bilibili/flv.js/blob/master/docs/api.md)

## Methods
| Method      | Description    | Parameters        |
|----------   |--------|----------   |
| play        | play   |             |
| pause       | pause   |             |
| dispose     | dispose   |             |
