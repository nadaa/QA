import axios from 'axios'

export default () =>{
    return axios.create({
        baseURL:'54.185.137.167:8001'
    })
}
