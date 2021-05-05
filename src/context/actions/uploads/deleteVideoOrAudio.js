import axios from '../../helpers/axiosInstance'
import {DELETE_VIDEO_AUDIO} from '../../constants/endpoints'
const deleteVideoOrAudio = (id, payload) => (dispatch) =>{
    //let city = JSON.parse(localStorage.getItem("user").city)
    let token = JSON.parse(localStorage.getItem("token"))
    let params = {
        id: id
    }
    axios.delete(DELETE_VIDEO_AUDIO, {
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

export default deleteVideoOrAudio