import axios from '../../helpers/axiosInstance'
import {UPDATE_UPLOAD_ACTIVE} from '../../constants/endpoints'
const updateIsActive = (active, uploadID, payload) => (dispatch)=>{
    //let city = JSON.parse(localStorage.getItem("user").city)

    let token = JSON.parse(localStorage.getItem("token"))
    let formData = new FormData();
    formData.append('id', uploadID);
    formData.append('active', active);
    let params = {
        id: uploadID,
        active: active
    }
    console.log(params)

    axios.put(UPDATE_UPLOAD_ACTIVE, formData, {
        headers:{
            Authorization: token
        }, 

    })
    .then((response) =>{
        dispatch({
            type: "GET_UPLOADS_SUCCESS",
            payload: payload
        })
    }).catch(err =>{
        // dispatch({
        //     type: "GET_UPLOADS_FAIL",
        //     payload: err
        // })
    })
}

export default updateIsActive