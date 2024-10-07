<template>
  <div>
    <p>index</p>
    <p>useTestStore:{{store_test.data}}</p>
    <h1>{{ computedMessage }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
  {{ xxx }}
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'

import { useTestStore } from '~/stores/testStore'
const store_test = useTestStore()

import { useMessageStore } from "~/stores/messageStore";
const store_message = useMessageStore()

const xxx = JSON.parse(store_message.data).message
// 使用 computed 计算派生数据
// const computedMessage = computed(() => {
//   return store_test.data ? `Computed Message: ${store_test.data.message}` : 'Loading...'
// })
//
// // 使用 watch 监听 store.data.message 的变化
// watch(() => store_test.data?.message, (newMessage, oldMessage) => {
//   console.log('Message changed from', oldMessage, 'to', newMessage)
//   // 执行副作用操作，比如记录日志或发送 API 请求
// })

// 在组件挂载时获取初始数据
onMounted(() => {
  if (!store_test.data) {
    store_test.fetchData()
  }
  if (!store_message.data) {
    store_message.fetchData()
  }
})

// 改变 store 中的数据
const changeMessage = () => {
  store_test.updateData('New message from button click!')
}
</script>
