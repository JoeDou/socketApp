export const ADD_FIELD = "ADD_FIELD"

export function addField(input){
  return {
    type: ADD_FIELD,
    payload: input
  }
}
