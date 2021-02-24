import React from "react";
import StyledArea from "../StyledComponents/styledArea";
import StyledError from "../StyledComponents/styledError";

export const FormInputArea = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledArea ref={register} id={id} data-cy={id} {...inputProps} />
      {error && (
        <StyledError>
          <div>{error.message}</div>
        </StyledError>
      )}
    </>
  );
};
