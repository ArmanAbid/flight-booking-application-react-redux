export default function Options({ options }) {
  return options.map((option) => (
    <>
    {option.value === "default" 
    ?  (<option value="">{option.label} </option>)
    : (<option value={option.value} required>{option.label} </option>)
  }
    </>
  ));
}
