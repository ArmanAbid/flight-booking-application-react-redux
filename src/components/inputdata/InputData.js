import From from "./From";
import To from "./To";
import JourneyDate from "./JourneyDate";
import Guests from "./Guests";
import Class from "./Class";
import BookBtn from "./BookBtn";
import { useDispatch, useSelector } from "react-redux";
import { bookFlight } from "../../redux/flight/action";

export default function InputData() {
  const dispatch = useDispatch();
  const flightState = useSelector((state) => state.flights);
  const addFlightHandler = (e) => {
    e.preventDefault();
    if (flightState.length + 1 > 3) {
      alert("Something went wrong");
      return console.error("Can't add more flights");
    }
    if (e.target[0].value === e.target[1].value) {
      alert("Something went wrong");
      return console.error("Destination from and Destination to can't be same");
    }
    dispatch(
      bookFlight({
        id: flightState.length + 1,
        from: e.target[0].value,
        to: e.target[1].value,
        date: e.target[2].value,
        guests: e.target[3].value,
        class: e.target[4].value,
      })
    );
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form
          className="first-hero lws-inputform"
          onSubmit={(e) => addFlightHandler(e)}
        >
          <From />
          <To />
          <JourneyDate />
          <Guests />
          <Class />
          <BookBtn />
        </form>
      </div>
    </div>
  );
}
