import axios from '../../helpers/axiosInstance'
import {GET_TRACKINGS} from '../../constants/endpoints'
const getTest = () =>{
    //let city = JSON.parse(localStorage.getItem("user").city)
    let token = JSON.parse(localStorage.getItem("token"))
    axios.get(GET_TRACKINGS, {
        params: {
            city: "Braga"
        },
        headers:{
            Authorization : token
        }
    }).then((response) =>{
        console.log(response.data)
    }).catch(err =>{
    })
}

export default getTest