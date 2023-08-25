import Options from "../elements/Options"

export default function Class() {
   const options = [
    {
      value: "default",
      label: "Please Select"
    },
    {
      value: "Business",
      label: "Business" 
    },
    {
      value: "Economy",
      label: "Economy"
    }
   ]
    return(
        <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                <Options options={options}/>
              </select>
            </div>
          </div>
    )
}