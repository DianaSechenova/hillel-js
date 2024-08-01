import axios from 'axios'

const instance = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: 'http://localhost:3000',
    header: {
        'Content-Type': 'application/json'
    }
})

const api = Object.freeze({
    getDestination() {
        return instance.get('destination')
    },
    // getHotels(params) {
    //     return instance.get('hotels', {
    //         params
    //     })
    // }
})

export default api;
