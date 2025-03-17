import axios from 'axios'

class HttpClient {
  constructor(config) {
    this.client = axios.create(config)
    this.accessToken = null

    this.onRequest = this.onRequest.bind(this)
    this.onResponse = this.onResponse.bind(this)
    this.onError = this.onError.bind(this)

    this.client.interceptors.request.use(this.onRequest, this.onError)
    this.client.interceptors.response.use(this.onResponse, this.onError)
  }

  setAccessToken(token) {
    this.accessToken = token
  }

  getAccessToken() {
    return this.accessToken
  }

  resetAccessToken() {
    this.accessToken = null
  }

  onRequest(config) {
    if (this.accessToken) {
      config.headers.Authorization = this.accessToken
    }
    return config
  }

  onResponse(response) {
    return response.data
  }

  async onError(error) {
    const response = error.response

    if (axios.isAxiosError(error)) {
      return Promise.reject({
        message: response?.data || '알 수 없는 서버 오류가 발생했습니다.',
        status: response?.status,
      })
    }

    return Promise.reject(error)
  }
}

export default HttpClient
