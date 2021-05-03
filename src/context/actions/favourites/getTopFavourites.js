import axios from '../../helpers/axiosInstance'
import {GET_TOP_FAVOURITES} from '../../constants/endpoints'
const getTopFavourites = () => (dispatch) =>{
    dispatch({
        type: 'SET_LOADING',
        payload: null
    })
    //let city = JSON.parse(localStorage.getItem("user").city)
    let token = JSON.parse(localStorage.getItem("token"))
    axios.get(GET_TOP_FAVOURITES, {
        params: {
            city: "Braga"
        },
        headers:{
            Authorization : token
        }
    }).then((response) =>{
        // console.log(response.data)
        dispatch({
            type: "GET_TOP_FAVOURITES_SUCCESS",
            payload: response.data.slice(0, 4)
        })
    }).catch(err =>{
        dispatch({
            type: "GET_TOP_FAVOURITES_FAIL",
            payload: err
        })
    })
}

export default getTopFavourites