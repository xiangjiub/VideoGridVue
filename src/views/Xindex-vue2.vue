<template>
  <div className="main">
    <div className="header">视频监视</div>
    <div className="mainbox">
      <div
        className="boxall"
        v-for="(item, index) in state.list"
        :key="item.id"
      >
        <div className="boxitem">
          <div className="video-area">
            <div
              :id="`video${index}`"
              @click="clickPay(item, index)"
              ref="refInfo"
            ></div>
            <div class="info-des">
              <p>温度：20</p>
              <p>天气：晴</p>
              <p>地点：成都</p>
            </div>
          </div>
          <div className="boxfoot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HlsPlayer from 'xgplayer-hls';
export default {
  name: "VideoGrid",
  data() {
    return {
      state: {
        dom: [],
        list: [
          {
            id: "1",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          {
            id: "2",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          {
            id: "3",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          {
            id: "4",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          {
            id: "5",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          {
            id: "6",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          {
            id: "7",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          {
            id: "8",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          {
            id: "9",
            src: "//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8",
          },
          // {
          //   id: "10",
          //   src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          // },
        ],
      },
    };
  },
  methods:{
    async initPlayer(){
      await this.$nextTick()
      
      this.state.list.map((item,index)=>{
        let player = new HlsPlayer({
          id: `video${index}`,
          // autoplay: true,//自动播放
          autoplayMuted: true,//自动播放静音，设置自动播放参数必要参数
          // loop: true,//循环播放
          videoInit: true,//视频首帧
          volume: 0.4,//音量
          cssFullscreen: false,//全屏
          width: '100%',
          height: '100%',
          fitVideoSize: 'fixWidth',
          lang: 'zh-cn',//国际化
          controls:true,// 播放器控制
          url:item.src,
          // download: false,//视频能下载
          poster: "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
          playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组
          defaultPlaybackRate: 1,//默认播放速度
          // cors: true // 请求是否跨域
        })
        this.state.dom.push(player)
      })
    },
    clickPay(){
      this.state.dom[curIndex].play()
    }
  },
  mounted() {
    this.initPlayer()
  },
};
</script>


<style lang="less" scoped>
@import "./index.less";
</style>