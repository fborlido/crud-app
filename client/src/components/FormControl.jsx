import React from "react";

const FormControl = ({
  label,
  type,
  placeholder,
  name,
  id,
  onChange,
  value,
}) => {
  return (
    <div className="control">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormControl;
