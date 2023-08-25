import Options from "../elements/Options";


export default function From() {
  const options = [
    {
      value:"default",
      label:"Please Select"
    },
    {
      value : "Dhaka",
      label : "Dhaka"
    },
    {
      value : "Sylhet",
      label : "Sylhet"
    },
    {
      value : "Saidpur",
      label : "Saidpur"
    },
    {
      value : "Cox's Bazar",
      label : "Cox's Bazar"
    },
  ]
  return (
    <div className="des-from">
      <p>Destination From</p>
      <div className="flex flex-row">
        <img src="./img/icons/Frame.svg" alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="from"
          id="lws-from"
          required
        >
          <Options options= {options}/>
        </select>
      </div>
    </div>
  );
}
