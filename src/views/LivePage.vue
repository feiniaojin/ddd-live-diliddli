<template>
  <div class="live-container">
    <h1 class="live-title">
      <span>{{ live.title }} </span>
    </h1>
    <div id="mse"></div>
    <p class="des">{{ live.description || "wwewefweffeewewewf" }}</p>
  </div>
</template>
  
<script>
import Player from "xgplayer";
import FlvPlayer from "xgplayer-flv";
import http from "@/apis/http";
import { useRoute } from "vue-router";
import "xgplayer/dist/index.min.css";

export default {
  props: {
    id: String,
  },
  data() {
    return {
      live: {},
    };
  },
  setup(props) {
    const route = useRoute();
    const directParam = route.params.id;
    console.log(directParam);
    console.log(12122);
    return { directParam };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      http
        .get("/live/get?liveId=" + this.directParam, {
          params: {
            ...this.page,
          },
        })
        .then((response) => {
          // 处理响应数据
          this.live = response.data || {};
          console.log(this.live.liveCover);
          let player = new Player({
            id: "mse",
            plugins: [FlvPlayer],
            poster: this.live.liveCover,
            url: this.live.pullUrl,
            isLive: true,
            playsinline: true,
          });
        })
        .catch((error) => {
          // 处理错误
        });
    },
  },
};
</script>
  
  <style>
.live-video-warp {
  width: 668px;
  height: 376px;
  background: #000;
  border-radius: 8px;
}
.live-container {
  text-align: center;
  padding: 20px;
  width: 668px;
  height: 376px;
  box-sizing: border-box;
  margin: 0 auto;
}
video {
  max-width: 100%;
  height: auto;
}
.live-title {
  text-align: left;
  display: flex;
  line-height: 36px;
  justify-content: space-between;
  span:nth-child(2) {
    font-size: 16px;
    font-weight: normal;
  }
}
.des {
  text-align: left;
  margin-top: 20px;
  line-height: 24px;
}

#mse {
  margin-top: 20px;
}
</style>