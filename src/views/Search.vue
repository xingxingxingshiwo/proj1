<template>
  <div>
    <h1>查找</h1>
    输入姓名<input v-model="name"/><br/>
    电话<input v-model="tel"/><br/>
    <input type="button" value="查找" @click="search"/>
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
      axios.post('/list', this.data).then(res => {
        this.list = res.data
      })
    }

  }
}
</script>
<style>
</style>
