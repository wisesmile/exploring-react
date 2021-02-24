import React from "react";
import StyledError from "../StyledComponents/styledError";
import styled, { css } from "styled-components";
import sharedStyles from "../StyledComponents/sharedStyles";
import States from "../States";

const Select = styled.select`
  ${sharedStyles}
`;

export const FormInputAreasDropdown = ({
  register,
  error,
  label,
  id,
  selectOptions,
  ...inputProps
}) => {
  return (
    <>
      <select
        id="area"
        name="county_select"
        ref={register({ required: true })}
        data-cy="select-area"
      >
        <option value="">Select</option>
        {selectOptions.map((m) => (
          <option value={m.code} key={m.text}>
            {m.text}
          </option>
        ))}
      </select>
    </>
  );
};
