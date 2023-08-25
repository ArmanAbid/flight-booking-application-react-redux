import {  useSelector } from "react-redux";

export default function BookBtn() {
  const flightState = useSelector((state) => state.flights);
  console.log(flightState.length);
  return (
    <button className="addCity" type="submit" id="lws-addCity">
      <svg
        width="15px"
        height="15px"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <span className="text-sm">Book</span>
    </button>
  );
}
