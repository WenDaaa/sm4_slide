<template>
  <div class="app1">
    <div >
      <div>压缩</div>
      <el-input type='textarea' v-model="text"></el-input>
      <div>
        <el-button @click="Encrypt">压缩</el-button>
      </div>
      <div>压缩后:</div>
      <div style="word-wrap: break-word;word-break: break-all;">{{textEncrypt}}</div>
    </div>
    <div>
      <div>解压缩</div>
      <el-input type='textarea' v-model="password"></el-input>
      <div>
        <el-button @click="Decrypt">解压</el-button>
      </div>
      <div>解压后:</div>
      <div style="word-wrap: break-word;word-break: break-all;">{{passwordDecrypt}}</div>
    </div>
  </div>
</template>

<script>
import pako from './pako.min.js'
export default {
  data() {
    return {
      text: "",
      textEncrypt: "",
      password: "",
      passwordDecrypt: ""
    };
  },
  created(){
    let text='f10df140ef737ad6dc7c1bbe5421132cH4sIAAAAAAAAABWS2QHAIAhDVwLlchzO/Uco/bM0grxEoc4pPVkT1yZapI0Fzyu7J+kZT10gAzV8diZSklkYOUIR+elk9y3Dc15DaB8cbUoKQiJ8PZDiSXy0KsvrYGKtxGF7vw6ha0VQLOCAZpFpYuNIzZlVdJ7L3mqUCMY9Xt+aoMjllUHDTgKseKC58poE3KkTJ7cZ+1RxcpncZ9KXcos37HRHWpwuF4tty3hW9ay7sY0o8jXJNo6GPADsXtxT2wAG32k2xF00HfueBrmCxK+dqIdXrqxU/WJMn8dtVzG2y1IIp01zkXRU7miXFnpyFDgA/Y6IIONSpXDZh0jV8wm9VwIsH6npAqiWCV8QmlDrGZHsyCNS4xA4eO6bVDNkCbq9JhWF4S7EjSMlol6paX5Ij8lJH6B7je+GAEo058lLFpnGeJ0KLzx6rTNd+7YU6x9IKYDborG1nvVqaRE50HKDJuCZewzrzu/DyEy5LlprQrsvlC0WyFHhdN3EkXZ6FuxXhvrSe+KjUCTK8+Mmppx5ntfnZhxF+1mso53t7JvX9sLNbdXdBObWEPS93S/v/vgAFTQoSAADAAA='
    text=text.substring(32)
    console.log(text)
    let strData   = atob(text);
    // Convert binary string to character-number array
    var charData  = strData.split('').map(function(x){return x.charCodeAt(0);});
    // Turn number array into byte-array
    var binData   = new Uint8Array(charData);
    // // unzip
    var data    = pako.inflate(binData);
    // Convert gunzipped byteArray back to ascii string:
    strData   = String.fromCharCode.apply(null, new Uint16Array(data));
    console.log(strData)
  },
  methods: {
      unzip(b64Data) {
 
      },
      Encrypt(){
          let text='f10df140ef737ad6dc7c1bbe5421132cH4sIAAAAAAAAABWS2QHAIAhDVwLlchzO/Uco/bM0grxEoc4pPVkT1yZapI0Fzyu7J+kZT10gAzV8diZSklkYOUIR+elk9y3Dc15DaB8cbUoKQiJ8PZDiSXy0KsvrYGKtxGF7vw6ha0VQLOCAZpFpYuNIzZlVdJ7L3mqUCMY9Xt+aoMjllUHDTgKseKC58poE3KkTJ7cZ+1RxcpncZ9KXcos37HRHWpwuF4tty3hW9ay7sY0o8jXJNo6GPADsXtxT2wAG32k2xF00HfueBrmCxK+dqIdXrqxU/WJMn8dtVzG2y1IIp01zkXRU7miXFnpyFDgA/Y6IIONSpXDZh0jV8wm9VwIsH6npAqiWCV8QmlDrGZHsyCNS4xA4eO6bVDNkCbq9JhWF4S7EjSMlol6paX5Ij8lJH6B7je+GAEo058lLFpnGeJ0KLzx6rTNd+7YU6x9IKYDborG1nvVqaRE50HKDJuCZewzrzu/DyEy5LlprQrsvlC0WyFHhdN3EkXZ6FuxXhvrSe+KjUCTK8+Mmppx5ntfnZhxF+1mso53t7JvX9sLNbdXdBObWEPS93S/v/vgAFTQoSAADAAA='
          this.textEncrypt=this.unzip(this.text);
        //   console.log(pako.)
      },
      Decrypt(){
            let text=this.password
            text=text.substring(32)
            let strData   = atob(text);
            // Convert binary string to character-number array
            var charData  = strData.split('').map(function(x){return x.charCodeAt(0);});
            // Turn number array into byte-array
            var binData   = new Uint8Array(charData);
            // // unzip
            var data    = pako.inflate(binData);
            // Convert gunzipped byteArray back to ascii string:
            strData   = String.fromCharCode.apply(null, new Uint16Array(data));
            this.passwordDecrypt=strData
      },
  }
}
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