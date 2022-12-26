import axios from 'axios'

export const axiosFetch = axios.create({
  baseURL: 'http://api.github.com',
})
