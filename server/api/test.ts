import { useTestStore } from '~/stores/testStore'
export default defineEventHandler(() => {


    const store_test = useTestStore()
    store_test.updateData("ok")
    return { message: 'Hello from server!！！' }
})
