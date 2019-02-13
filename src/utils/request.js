import axios from 'axios'

const server = axios.create({
  baseURL: '',
  timeout: 5000
})
server.interceptors.request.use(
  config => {
    return config
  }
)

export default server
