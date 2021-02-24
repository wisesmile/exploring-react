import React from "react";
import StyledError from "../StyledComponents/styledError";
import StyledFieldset from "../StyledComponents/styledFieldSet";

export const FormInputFilingStatus = ({
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
            value="s"
            name={id}
            data-cy={radioYes}
            ref={register}
          />
          Single
        </label>
        <label>
          <input
            type="radio"
            value="m"
            name={id}
            data-cy={radioNo}
            ref={register}
          />
          Married
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
