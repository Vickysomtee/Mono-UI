import axios from 'axios'

import {getToken} from '../utils/auth'

const token = getToken('token')

export default axios.create({
  baseURL: "https://mono-service-api.herokuapp.com/v1",
  headers: {
    "Content-type": "application/json",
    authorization: `Bearer ${token}`,
  },

  
})