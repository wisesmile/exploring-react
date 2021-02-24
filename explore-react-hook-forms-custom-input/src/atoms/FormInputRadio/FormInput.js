import React from "react";
import StyledError from "../StyledComponents/styledError";
import StyledFieldset from "../StyledComponents/styledFieldSet";

export const FormInputRadio = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  let radioYes = id + "_yes";
  let radioNo = id + "_no";
  return (
    <>
      <StyledFieldset>
        <legend>{label}</legend>
        <label>
          <input
            type="radio"
            value="y"
            name={id}
            data-cy={radioYes}
            ref={register}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="n"
            name={id}
            data-cy={radioNo}
            ref={register}
          />
          No
        </label>
      </StyledFieldset>
      {error && (
        <StyledError>
          <div>{error.message}</div>
        </StyledError>
      )}
    </>
  );
};
