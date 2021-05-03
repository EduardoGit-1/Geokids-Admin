const topFavouritesReducer = (state, {type, payload}) =>{
    switch(type){
        case 'GET_TOP_FAVOURITES_SUCCESS':
            return {
                ...state,
                topFavourites : payload,
                loading: false,
                error : null
            }
        case 'GET_TOP_FAVOURITES_FAIL':
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
export default topFavouritesReducer;