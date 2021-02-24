import React from "react";

export const FormInputBeta = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} data-cy={id} {...inputProps} />
      {error && <div>{error.message}</div>}
    </>
  );
};
