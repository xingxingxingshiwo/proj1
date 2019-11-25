<template>
   <div>
     <p>这是首页</p>
  </div>
</template>

<script>
import { a } from '../lib/mod_a'
import b from '../lib/mod_b'
// from后面跟着一个文件，如果是目录，就会去找目录下面的index文件
// import { n } from '../lib/mod_b/n'
// 或者分开写
import axios from 'axios'
export default {
  methods: {
    runMyCode () {
      a()
      b.m()
      b.n()
    },
    getHello () {
      axios
        .request({
          method: 'GET',
          url: '/api/hello'
        }).then(function (res) {
          console.log(res.data)
        })
    },
    add () {
      axios.post('/api/add', {
        cc: 1,
        dd: 2
      }).then(function (res) {
        console.log(res.data)
      })
    }
  }
}
</script>
<style scoped>
  p{
      display: block;
      background: #ffe87c;
  }
 </style>
