import {LOGIN_SUCCESS} from './constants/constants'

const initialState =  {
    user: null,
    count: 0,
}

export default dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                  user: action.user
            }
        default:
        return state
    }
}
