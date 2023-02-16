import "./TextField.css";

export const TextField = ({
  label,
  type = "text",
  value = "",
  onChange = () => {},
  addClass = "",
  required = false,
  placeholder = "",
}) => {
  return (
    <>
      {label && <label className="textfield-label-class">{label}</label>}
      <div className="textfield-div">
        <input
          type={type}
          className={`textfield-input ${addClass ? addClass : "h-10"}`}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
