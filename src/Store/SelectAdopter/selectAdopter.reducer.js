
var initialState = {
    adopter:null
}

export default function selectionAdopter(state = initialState, action){
    switch(action.type){
        case 'ADOPTER_SELECTION':
            return action.payload[0]
        default:
            return state
    }
}