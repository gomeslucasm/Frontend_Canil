var initialState = {
    type:'',
    animal:null,
}

export default function selectAnimal(state = initialState, action){
    switch(action.type){
        case 'SEE_ANIMAL':
            return action.payload[0]
        case 'UPDATE_ANIMAL':
            return action.payload[0]
        case 'GET_ANIMAL':
            return action.payload[0]
        default:
            return state
    }
}