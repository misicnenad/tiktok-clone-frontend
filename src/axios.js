import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:9000',
    baseURL: 'https://tiktok-mern-clone-nm.herokuapp.com/',
})

export default instance
