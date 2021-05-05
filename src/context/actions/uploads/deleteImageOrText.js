import axios from '../../helpers/axiosInstance'
import {DELETE_TEXT_IMAGE} from '../../constants/endpoints'
const deleteImageOrText = (id, payload) => (dispatch) =>{
    //let city = JSON.parse(localStorage.getItem("user").city)
    let token = JSON.parse(localStorage.getItem("token"))
    let params = {
        id: id
    }
    axios.delete(DELETE_TEXT_IMAGE, {
        headers:{
            Authorization: token
        }, 
        params
    }).then((response) =>{
        dispatch({
            type: 'GET_UPLOADS_SUCCESS',
            payload : payload
        })

    }).catch(err =>{

    })
}

export default deleteImageOrText