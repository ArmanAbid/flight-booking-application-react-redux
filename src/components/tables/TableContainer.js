import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSelector } from "react-redux";

export default function TableContainer() {
  const flightState = useSelector(state => state.flights)
    return(
      <div className="table-container">
      <table className="booking-table">
        {flightState.length>0 && (<><TableHead/>
        <TableBody/></>)}
      </table>
    </div>
    )
}