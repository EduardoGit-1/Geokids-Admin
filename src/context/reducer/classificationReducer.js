const classificationReducer = (state, {type, payload}) =>{
    switch(type){
        case 'GET_CLASSIFICATION_SUCCESS':
            return {
                ...state,
                classifications : payload,
                loading: false,
                error : null
            }
        case 'GET_CLASSIFICATION_FAIL':
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
export default classificationReducer;