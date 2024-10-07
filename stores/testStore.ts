import { defineStore } from 'pinia'

export const useTestStore = defineStore('testStore', {
    state: () => ({
        data: null as { message: string } | null, // 确保 data 类型与返回数据一致
        // data: "hello", // 确保 data 类型与返回数据一致
    }),
    actions: {
        async fetchData() {
            const response = await $fetch('/api/test')
            console.log(response)
            this.data = response
        },
        updateData(newMessage: string) {
            this.data = { message: newMessage }
        }
    }
})
