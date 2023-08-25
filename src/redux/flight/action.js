import { BOOK_FLIGHT,DELETE_FLIGHT  } from "./actionTypes";

export  const bookFlight = (value) =>{
    return{
        type:  BOOK_FLIGHT,
        payload : value
    }
}
export const  deleteFlight = (value) =>{
    return{
        type:  DELETE_FLIGHT,
        payload : value
    }
}