import axios from 'axios'
//não pode ser localhost, pq se não ele vai apontar pro proprio react native
//no lugar vai o ip da sua maquina
const api = axios.create({
    baseURL: 'http://192.168.2.102:3030'
})

export default api