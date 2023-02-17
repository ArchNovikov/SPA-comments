import axios from 'axios';

const $host = axios.create({
    baseURL: 5000
    })

export {$host};