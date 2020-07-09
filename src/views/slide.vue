<template>
  <div class="slideContainer">
    <div class="loginInfo">
        <span class="loginnext">请完成下列验证后继续</span>
        <span class="loginReset" @click="handleClick" >
            <i class="el-icon-refresh"></i>
            <span>刷新</span>
        </span>
    </div>
    <slide-verify
      ref="slideblock"
      @again="onAgain"
      @fulfilled="onFulfilled"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
      :show="false"
      :accuracy="accuracy"
      :slider-text="text"
      :imgs="imgArr"
    ></slide-verify>
  </div>
</template>

<script>
import img1 from '@/assets/1.png'
import img2 from '@/assets/2.png'
import img3 from '@/assets/3.png'
import img4 from '@/assets/4.png'
import SlideVerify from '@/components/slide-verify.vue'
export default {
  data() {
    return {
      msg: "",
      text: "按住左边按钮拖动完成上方拼图",
      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
      accuracy: 1,
    //   imgArr:[require('@/assets/1.png'),require('@/assets/2.png'),require('@/assets/3.png'),require('@/assets/4.png')]
      imgArr:[img1,img2,img3,img4]
    };
  },
  components:{
      SlideVerify
  },
  created(){
    // SlideVerify
  },
  methods: {
    onSuccess() {
      console.log("验证通过");
      this.msg = "login success";
    },
    onFail() {
      console.log("验证不通过");
      this.msg = "";
    },
    onRefresh() {
      console.log("点击了刷新小图标");
      this.msg = "";
    },
    onFulfilled() {
      console.log("刷新成功啦！");
    },
    onAgain() {
      console.log("检测到非人为操作的哦！");
      this.msg = "try again";
      // 刷新
      this.$refs.slideblock.reset();
    },
    handleClick() {
      // 父组件直接可以调用刷新方法
      this.$refs.slideblock.reset();
    }
  }
};
</script>

<style lang="less" scoped>
.slideContainer{
    width: 320px;
}
.el-icon-refresh{
    margin-right: 5px;
}
.loginReset{
    color: #4A77F2;
    cursor: pointer;
}
.loginnext{
    color: #151E26;
    font-weight: 500;
    
}
.loginInfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    font-family:PingFang SC;
}
.imgLogin{
    width: 320px;
}
</style>


