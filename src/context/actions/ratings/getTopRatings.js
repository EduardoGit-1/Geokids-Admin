import axios from '../../helpers/axiosInstance'
import {GET_TOP_RATINGS} from '../../constants/endpoints'
const getTopRatings = () => (dispatch) =>{
    dispatch({
        type: 'SET_LOADING',
        payload: null
    })
    //let city = JSON.parse(localStorage.getItem("user").city)
    let token = JSON.parse(localStorage.getItem("token"))
    axios.get(GET_TOP_RATINGS, {
        params: {
            city: "Braga"
        },
        headers:{
            Authorization : token
        }
    }).then((response) =>{
        // console.log(response.data)
        dispatch({
            type: "GET_TOPRATINGS_SUCCESS",
            payload: response.data.slice(0, 4)
        })
    }).catch(err =>{
        dispatch({
            type: "GET_TOPRATINGS_FAIL",
            payload: err
        })
    })
}

export default getTopRatings