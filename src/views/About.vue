<template>
  <div class="app1">
    <div >
      <div>加密</div>
      <el-input type='textarea' v-model="text"></el-input>
      <div>
        <el-button @click="Encrypt">加密</el-button>
      </div>
      <div>密文:</div>
      <div style="word-wrap: break-word;word-break: break-all;">{{textEncrypt}}</div>
    </div>
    <div>
      <div>解密</div>
      <el-input type='textarea' v-model="password"></el-input>
      <div>
        <el-button @click="Decrypt">解密</el-button>
      </div>
      <div>解码后:</div>
      <div style="word-wrap: break-word;word-break: break-all;">{{passwordDecrypt}}</div>
    </div>
  </div>
</template>

<script>
import {encrypt,decrypt} from './sm4'
export default {
  data() {
    return {
      text: "",
      textEncrypt: "",
      password: "",
      passwordDecrypt: "",
      sm4:''
    };
  },
  created(){
    // this.initSm4();
  },
  methods: {
    //加密
    Encrypt() {
      // this.textEncrypt = this.sm4.encrypt(this.text);
      this.textEncrypt=encrypt(this.text)
    },
    // 解密
    Decrypt() {
      // this.passwordDecrypt = this.sm4.decrypt(this.password);
      this.passwordDecrypt=decrypt(this.password)
    }
  }
};
</script>
<style lang="less" scoped>
.app1{
  display:flex;
  justify-content: space-around;
  >div{
    width: 40%;
  }
}
</style>