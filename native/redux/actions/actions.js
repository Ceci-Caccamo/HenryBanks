import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL} from './constants/constants';
const API =
axios.defaults.withCredentials = true

export function postLog(user) {//va a REDUCER
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}
export function loginRequest(usuario) {//Crear ruta para loguear
  return (dispatch) => {
    axios.post(API, usuario)
      .then(response => {
          dispatch(postLog(response.data),
        )}
      )
      .catch(error => { dispatch({type: LOGIN_FAIL}) })
  }
}
