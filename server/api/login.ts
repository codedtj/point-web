import { readBody } from 'h3'


export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Forward to the backend API
    const response = await $fetch('https://bbauuntpeliikurte3ku.containers.yandexcloud.net/v1/login', {
        method: 'POST',
        body,
    })

    return response
})
