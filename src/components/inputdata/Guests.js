import Options from "../elements/Options";

export default function Guests() {
  const options = [
    {
      value: "default",
      label: "Please Select"
    },
    {
      value: "1 Person",
      label: "1 Person"
    },
    {
      value: "2 Person",
      label: "2 Person"
    },
    {
      value: "3 Person",
      label: "3 Person"
    },
    {
      value: "4 Person",
      label: "4 Person"
    },
   ]
  return (
    <div className="des-from">
      <p>Guests</p>
      <div className="flex flex-row">
        <img src="./img/icons/Vector (1).svg" alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="guests"
          id="lws-guests"
          required
        >
         <Options options={options}/>
        </select>
      </div>
    </div>
  );
}
