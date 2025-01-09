<template>
  <div class="list-container">

    <el-row :gutter="20">
      <el-col :span="8" v-for="live in liveObj.list" :key="live.id">
        <el-card @click="goToLive(live)" class="live-card">
          <div class="live-image-concatiner">
            <img :src="live.liveCover" class="live-image" />
            <span class="text-tag">{{ live.tagstr }}</span>
          </div>
          <div class="live-info">
            <h3 class="live-info-name">{{ live.name }}</h3>
            <p class="live-info-tip">
              <span class="anchor">{{ live.anchor || "沧海明月生" }}</span>
              <span class="show-status">{{ live.liveStatusShow }}</span>
            </p>
            <p class="textl mt10">
              {{ live.planStartTime }} ~ {{ live.planEndTime }}
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="pagination-warp">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="liveObj.total"
        :page-size="10"
        @current-change="handlePageChange"
        class="pagination"
      />
    </div>
  </div>
</template>
  
  <script>
import { useRouter } from "vue-router";
// 在Vue组件中
import http from "../apis/http";

export default {
  setup() {
    const router = useRouter();
    const goToLive = (live) => {
      router.push(`/live/${live.liveId}`);
    };
    return { goToLive };
  },
  data() {
    return {
      page: {
        pageSize: 10,
        total: 0,
        page: 1,
      },
      liveObj: {
        pageSize: 10,
        total: 11,
        page: 1,
        list: [
          
        ],
      },
    };
  },
  mounted() {
    console.log("mounted-response");
    this.fetchData();
  },
  methods: {
    fetchData() {
      http.get("/live/pageList", {
          params: {
            ...this.page,
          },
        })
        .then((response) => {
          // 处理响应数据
          console.log("http-response");
          console.log(response);
          this.liveObj = response.data || {};
        })
        .catch((error) => {
          // 处理错误
          console.log(error);
        });
    },
    handlePageChange(page) {
      this.page.page = page;
      this.fetchData();
    },
  },
};
</script>
  
  <style>
.list-container {
  padding: 20px;
  background-color: #fff; /* 整个背景设置为白色 */
}
.live-image-concatiner {
  position: relative;
  background: #f5f5f5;
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.text-tag {
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
  font-size: 14px;
}
.live-card {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
}
.live-card:hover {
  transform: translateY(-5px);
}
.live-image {
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.live-info {
  padding-top: 10px;
}
.pagination {
  margin-top: 20px;
  text-align: center;
}
.live-info-name {
  font-weight: bold;
  font-size: 16px;
  color: #000;
  text-align: left;
  margin: 0 0 8px 0;
}
.live-info-tip {
  font-size: 14px;
  color: #3d3939;
  display: flex;
  justify-content: space-between;
}
.pagination-warp {
  width: 100%;
  display: flex;
  justify-content: end;
}
.textl {
  text-align: left;
}
.mt10 {
  margin-top: 10px;
}
.show-status {
  /* font-size: 14px;
    font-weight: bold;
    color: #000; */
}
.anchor {
  /* font-size: 16px; */
}
</style>