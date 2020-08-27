export const Increment = "Increment";
export const Decrement = "Dcerement";
export const By_number_munipulation = "By_number_munipulation";
export const increment =()=>{
    return{
        type: Increment
    }
}
export const dcerement =()=>{
    return{
        type: Decrement
    }
}

export const byNumbermunipulation =(number)=>{
    return{
        type: byNumbermunipulation,
        payload : number
    }
}

