const uploadReducer = (state, {type, payload}) =>{
    switch(type){
        case 'GET_UPLOADS_SUCCESS':
            return {
                ...state,
                totalUploads : payload,
                loading: false,
                error : null
            }
        case 'GET_UPLOADS_FAIL':
            return {
                ...state,
                error: payload,
                loading:false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }   
        default:
            return state
    }
}
export default uploadReducer;