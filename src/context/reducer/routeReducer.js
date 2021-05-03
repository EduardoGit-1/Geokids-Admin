const routeReducer = (state, {type, payload}) =>{
    switch(type){
        case 'GET_ROUTES_SUCCESS':
            return {
                ...state,
                routes : payload
            }
        case 'GET_ROUTES_FAIL':
            return {
                ...state,
                error: payload
            }   
        default:
            return state
    }
}
export default routeReducer;