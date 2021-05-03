import axios from '../../helpers/axiosInstance'
import {GET_CLASSIFICATIONS} from '../../constants/endpoints'
const getClassifications = () => (dispatch) =>{
    dispatch({
        type: 'SET_LOADING',
        payload: null
    })
    //let city = JSON.parse(localStorage.getItem("user").city)
    let token = JSON.parse(localStorage.getItem("token"))
    axios.get(GET_CLASSIFICATIONS, {
        params: {
            city: "Braga"
        },
        headers:{
            Authorization : token
        }
    }).then((response) =>{
        console.log(response.data)
        dispatch({
            type: "GET_CLASSIFICATION_SUCCESS",
            payload: response.data
        })
    }).catch(err =>{
        dispatch({
            type: "GET_CLASSIFICATION_SUCCESS_FAIL",
            payload: err
        })
    })
}

export default getClassifications