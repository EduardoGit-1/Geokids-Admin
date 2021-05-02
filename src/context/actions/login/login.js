import axios from '../../helpers/axiosInstance'
import {LOGIN} from '../../constants/endpoints'
const {REACT_APP_DEV_BACKEND_URL} = process.env
const signIn = (data, setUserData, rememberMe) =>{
    console.log(REACT_APP_DEV_BACKEND_URL+LOGIN);
    console.log(data)
    axios.post(LOGIN, data).then(response =>{
        console.log(response.data)
        let token = response.data.type + " " +response.data.token
        delete response.data.type
        delete response.data.token
        let user = response.data
        setUserData(token, user, rememberMe)
    })
}

export default signIn