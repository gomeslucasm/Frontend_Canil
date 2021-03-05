import {filterAnimalById} from '../../Utils/utils'
import store from '../store'
import apiPrivateService from '../../Service/apiPrivateService'

const privateService = new apiPrivateService();


export function see(id){
    const animals = store.getState().animals.data;
    const animal = filterAnimalById(animals,id)

    const state = {
        animal:animal[0],
        index:animal[1],
    }

    return{
        type: 'SEE_ANIMAL',
        payload:[state,]
    }
}

export function updateSelectedAnimal(data){
    const index = store.getState().selectAnimal.index
    const id = store.getState().selectAnimal.animal.id
    return async function(dispatch, getState) {
        const response = await privateService.animalPartialUpdate(data,id)
        const animal = response.data
        const state = {
            index:index,
            animal:animal,
        }
        /* console.log('Estado de update',state) */
        return dispatch({
            type:'UPDATE_ANIMAL',
            payload:[state,]
        })
      }
}

export function getAnimal(id){

    return async function(dispatch, getState) {
        console.log('testão')
        const response = await privateService.getAnimal(id)
        const animal = response
        const state = {
            animal:animal,
        }

        /* console.log('Estado de update',state) */
        return dispatch({
            type:'GET_ANIMAL',
            payload:[state,]
        })
      }
}