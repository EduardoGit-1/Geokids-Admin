import axios from '../../helpers/axiosInstance'
import {GET_ALL_UPLOADS} from '../../constants/endpoints'
const getAllUploads = () => (dispatch) =>{
    //let city = JSON.parse(localStorage.getItem("user").city)
    let token = JSON.parse(localStorage.getItem("token"))
    dispatch({
        type: "SET_LOADING",
        payload: true
    })
    axios.get(GET_ALL_UPLOADS, {
        params: {
            city: "Braga"
        },
        headers:{
            Authorization : token
        }
    }).then((response) =>{
        console.log(response.data)
        dispatch({
            type: "GET_UPLOADS_SUCCESS",
            payload: response.data
        })
    }).catch(err =>{
        dispatch({
            type: "GET_UPLOADS_FAIL",
            payload: err
        })
    })
}

export default getAllUploads