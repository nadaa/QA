import axios from 'axios'

export default () =>{
    return axios.create({
        baseURL:'0.0.0.0:8001'
    })
}
