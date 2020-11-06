import {} from './constants'

const initialState =  {
    user: null,
    count: 0,
}

export default dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFeching: true
            }
        default:
        return state
    }
}
