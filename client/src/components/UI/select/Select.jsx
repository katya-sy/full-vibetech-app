import cl from "./Select.module.css";

function Select({ options, onChange }) {
  return (
    <select className={cl.select} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
