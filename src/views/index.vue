<template>
<div class="main">
        <div class="header">视频监视</div>
        <div class="mainbox">
              <div class="boxall" v-for="(item,index) in state.list" :key="item.id" >
                <div class="boxitem">
                  <div class="video-area">
                    <!-- <div :id="`video${index}`" @click="clickPay(item,index)" ref="refInfo"></div> -->
                    <video controls ref="videoplay" muted :poster="item.poster"  autoplay style="width:100%;height: 100%;"  id="video" :src="item.src"   @click="clickPay(item,index)" >
                    </video>
                    <div class="info-des">
                      <p>温度：20</p>
                      <p>天气：晴</p>
                      <p>地点：成都</p>
                    </div>
                  </div>
                  <div class="boxfoot"></div>
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
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        {
          id: "2",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        {
          id: "3",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        {
          id: "4",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        {
          id: "5",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        {
          id: "6",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        {
          id: "7",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        {
          id: "8",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        {
          id: "9",
          src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
          poster:"https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
        },
        // {
        //   id: "10",
        //   src: "http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
        // },
      ],
    };


    //播放
    const clickPay = async(item:any,curIndex:any)=>{
      // if (videoplay.paused) {
      //   videoplay.play();
      // } else {
      //   videoplay.pause();
      // }

      for (let index = 0; index < state.list.length; index++) {
        if(curIndex != index){
          let otherVideo = internalInstance?.ctx?.$refs.videoplay[index]
          if(!otherVideo.paused){
            otherVideo.pause();
          }
        }
        
      }
    }

    const videoInit = async()=>{
      await nextTick()
      for (let index = 0; index < state.list.length; index++) {
        
        let otherVideo = internalInstance?.ctx?.$refs.videoplay[index]
        // if(!otherVideo.paused){
          otherVideo.autoPlay;
        // }
        
      }
    }


    onMounted(() => {
      // videoInit()
      
    })
    return {
      state,
      clickPay,
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>