import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messageStore', {
    state: () => ({
        data: null as any, // 使用 any 来允许任何类型的数据
    }),
    actions: {
        async fetchData() {
            const response = await $fetch('/api/messages')
            this.data = response
        },
        updateData(newMessage: string) {
            this.data = { message: newMessage }
        }
    }
    // persist: true

})
