const initialState = {
    data:[],
    prevPage:null,
    nextPage:1,
    pages:[],
    currentPage:1,
}

export default function Animals(state = initialState, action){
    switch(action.type){
        case 'DELETE_ANIMAL':
            return action.payload[0]
        case 'GET_ANIMALS':
            return action.payload[0]
        case 'UPDATE_ANIMALS':
            return action.payload[0]
        case 'UPDATE_ANIMAL_BY_ID':
            return action.payload[0]
        case 'TEST':
            console.log('teste')
            return action.payload[0]
        default:
            return state
    }

}