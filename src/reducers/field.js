import { ADD_FIELD } from '../actions/index'

const INITIAL_STATE = []

export default function(state=INITIAL_STATE, action){
  switch (action.type) {
    case ADD_FIELD:
    debugger
    let newState = [...state, action.payload]
      return newState
    default:
      return state
  }
}