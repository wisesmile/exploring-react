import React from "react";
import StyledError from "../StyledComponents/styledError";
import styled, { css } from "styled-components";
import sharedStyles from "../StyledComponents/sharedStyles";
import States from "../States";

const Select = styled.select`
  ${sharedStyles}
`;

export const FormInputStatesDropdown = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <select
        id="area"
        name="state"
        ref={register({ required: true })}
        data-cy="select-state"
      >
        <option value="">Select</option>
        {States.map((m) => (
          <option value={m.code} key={m.text}>
            {m.text}
          </option>
        ))}
      </select>
      {error && (
        <StyledError>
          <div>{error.message}</div>
        </StyledError>
      )}
    </>
  );
};
