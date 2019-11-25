<template>
  <div>
    <h1>查找</h1>
    输入姓名<input v-model="name"/><br/>
    电话  <input v-model="tel"/><br/>
    <input type="button" value="查找" @click="search"/>
    <input type="button" value="展示全部" @click="cc"/>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      tel: ''
    }
  },
  methods: {
    search () {
      axios.request({
        method: 'POST',
        url: '/api/list2',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          name: this.name,
          tel: this.tel
        })
      }).then((res) => {
        // 200
        alert('查询成功!')
        console.log(res.data)
        this.name = ''
        this.tel = ''
      }).catch((err) => {
        alert('失败：' + err)
      })
    },
    cc () {
      axios.post('/api/all', {
      }).then(function (res) {
        console.log(res.data)
      })
    }
  }
}
</script>
<style>
</style>
