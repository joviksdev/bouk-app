import React from "react";
import "./form-input.css";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  value,
  error = [],
  onFocus,
  onChange,
}) => {
  return (
    <>
      <div className="form_input_container">
        {label && (
          <label htmlFor={name} className="form-label">
            {label}
          </label>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          //   autoComplete="off"
          //   className={className}
          onFocus={onFocus}
          onChange={onChange}
        />

        {/* {error?.length > 0 && <small>{error[0]}</small>} */}
      </div>
    </>
  );
};

export default React.memo(FormInput);
