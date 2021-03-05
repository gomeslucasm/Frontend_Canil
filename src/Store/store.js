import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from "./User/user.reducer"
import animalsReducer from "./Animals/animals.reducer"
/* import selectAnimalReducer from "./SelectAnimal/selectAnimal.reducer"
import selectAdopterReducer from "./SelectAdopter/selectAdopter.reducer" */
import thunk from 'redux-thunk';



const rootReducer = combineReducers(
    {
        user: userReducer,
        animals:animalsReducer,
        /* selectAnimal:selectAnimalReducer,
        selectAdopter: selectAdopterReducer, */
    }
)

 
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
