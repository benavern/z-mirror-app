import axios from 'axios'
import config from './config'

export default axios.create({
  baseURL: config.api.url,
  headers: {'X-Z_MIRROR_TOKEN': config.api.token}
})
