import React from "react";

export const FormInputAlpha = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <p>this would be additional text</p>
      <input ref={register} id={id} data-cy={id} {...inputProps} />
      {error && <div>{error.message}</div>}
    </>
  );
};
