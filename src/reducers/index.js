import { combineReducers } from 'redux'
import fieldReducer from './field'

const rootReducer = combineReducers({
  data: fieldReducer
})

export default rootReducer