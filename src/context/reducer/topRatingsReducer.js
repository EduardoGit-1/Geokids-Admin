const topRatingsReducer = (state, {type, payload}) =>{
    switch(type){
        case 'GET_TOPRATINGS_SUCCESS':
            return {
                ...state,
                topRatings : payload,
                loading: false,
                error : null
            }
        case 'GET_TOPRATINGS_FAIL':
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
export default topRatingsReducer;