//let user = {name: "GUjjar", email: "abc@gmail.com"}
//let newUserOld = user;
//let newUser = { ...user,name: "Zia Khan", age :24}
import {Increment,Decrement,byNumbermunipulation} from './action'

const initialState = {
    counter: 0
}
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Increment: {
            return { ...state, counter: state.counter + 1 }
        }
        case Decrement: {
            return {
                ...state, counter: state.counter -1 
            }
        }
        case byNumbermunipulation : {
            return{
                ...state,counter:state.counter+action.payload 
            }
        }
        default: {
            return state
        }
    }

}

