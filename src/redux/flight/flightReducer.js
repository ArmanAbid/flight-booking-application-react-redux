import { BOOK_FLIGHT, DELETE_FLIGHT } from "./actionTypes";

const initialState = {
  flights: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_FLIGHT:
      if (
        !action.payload.id ||
        !action.payload.from ||
        !action.payload.to ||
        !action.payload.date ||
        !action.payload.guests ||
        !action.payload.class
      ) {
        return state;
      }
      return {
        ...state,
        flights: [
          ...state.flights,
          {
            id: action.payload.id,
            from: action.payload.from,
            to: action.payload.to,
            date: action.payload.date,
            guests: action.payload.guests,
            class: action.payload.class,
          },
        ],
      };
    case DELETE_FLIGHT:
      return {
        ...state,
        flights: state.flights.filter(
          (flight) => flight.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default flightReducer;
