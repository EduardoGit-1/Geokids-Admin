import axios from '../../helpers/axiosInstance'
import {GET_TRACKINGS} from '../../constants/endpoints'
const getTrackings = () => (dispatch) =>{
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
        dispatch({
            type: "GET_ROUTES_SUCCESS",
            payload: response.data
        })
    }).catch(err =>{
        dispatch({
            type: "GET_ROUTES_FAIL",
            payload: err
        })
    })
}

export default getTrackings