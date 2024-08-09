import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api01.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
})
