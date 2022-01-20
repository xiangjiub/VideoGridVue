<template>
<div className="main">
        <div className="header">视频监视</div>
        <div className="mainbox">
              <div className="boxall" v-for="(item,index) in state.list" :key="item.id" >
                <div className="boxitem">
                  <div className="video-area">
                    <div :id="`video${index}`" @click="clickPay(item,index)" ref="refInfo"></div>
                  </div>
                  <div className="boxfoot"></div>
                </div>
              </div>
        </div>
      </div>    
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, nextTick, onMounted, ref, toRef } from "vue";
import Player from 'xgplayer'

export default defineComponent({
  setup() {
    const internalInstance = getCurrentInstance() // 有效
    let state:any = {
      dom: [],
      list: [
        {
          id: "1",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        {
          id: "2",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        {
          id: "3",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        {
          id: "4",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        {
          id: "5",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        {
          id: "6",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        {
          id: "7",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        {
          id: "8",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        {
          id: "9",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        },
        // {
        //   id: "10",
        //   src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        // },
      ],
    };


    const initPlayer = (item:any,index:any)=>{
        state.dom[index] = new Player({
        id: `video${index}`,
        // el: document.getElementById(`video${index}`),
        autoplay: false,//自动播放
        loop: true,//循环播放
        videoInit: true,//视频首帧
        volume: 0.4,//音量
        width: '100%',
        height: '100%',
        fitVideoSize: 'fixWidth',
        url: item.url,
        download: false,//视频能下载
        poster: "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组
        defaultPlaybackRate: 1.5,//默认播放速度
        })
    }

    //播放
    const clickPay = async(item:any,index:any)=>{
        // console.log(refInfo.value,'菜单',internalInstance.ctx.$refs.refInfo[index]);
        await nextTick()
        state.dom[index].play()
        
    }
    const videoInit = async()=>{
        state.list.map((item:any,index:number)=>{
            initPlayer(item,index)
        }) 
        await nextTick()
    }
    onMounted(() => {
        videoInit()
      
    })
    return {
      state,
      clickPay,
      initPlayer,
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>