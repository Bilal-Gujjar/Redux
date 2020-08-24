//let user = {name: "GUjjar", email: "abc@gmail.com"}
//let newUserOld = user;
//let newUser = { ...user,name: "Zia Khan", age :24}


const initialState = {
    counter: 0
}
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Increment": {
            return { ...state, counter: state.counter + 1 }
        }
        case "Dcerement": {
            return {
                ...state, counter: state.counter -1 
            }
        }
        case "By number munipulation" : {
            return{
                ...state,counter:state.counter+action.payload 
            }
        }
        default: {
            return state
        }
    }

}

