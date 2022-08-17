import axios from 'axios'



export default axios.create({
  baseURL: "https://mono-service-api.herokuapp.com/v1",
  headers: {
    "Content-type": "application/json",
  },

  
})