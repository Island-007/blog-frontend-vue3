import axios from 'axios'
import type { AxiosInstance,AxiosRequestConfig,AxiosResponse } from 'axios'

class Request {
  instance:AxiosInstance
  baseConfig:AxiosRequestConfig = {
    baseURL:'/apis',
    timeout:5000
  }

  constructor(config:AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig,config))
    
    this.instance.interceptors.request.use(
      (config:AxiosRequestConfig) => {
        // config.headers = {
        //   'Content-Type':'application/x-www-form-urlencoded'
        // }
        const token = localStorage.getItem('token') as string
        if(token){
          config.headers!.Authorization = token
        }
        return config
      },
      (error: any) => {
        console.error("error:",error)
        Promise.reject(error)
      }
    )
    
    this.instance.interceptors.response.use(
      (res:AxiosResponse) => {
        return res.data
      },
      (error: any) => {
        console.error("error:",error)
        Promise.reject(error)
      }
    )
  }
  request(config:AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default new Request({})
