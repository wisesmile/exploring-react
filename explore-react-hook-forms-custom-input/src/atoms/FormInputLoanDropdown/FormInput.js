import React from "react";
import StyledError from "../StyledComponents/styledError";
import styled, { css } from "styled-components";
import sharedStyles from "../StyledComponents/sharedStyles";

const Select = styled.select`
  ${sharedStyles}
`;

export const FormInputLoanDropdown = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <Select
        id={id}
        class="form-control"
        name={id}
        ref={register}
        data-cy={id}
        {...inputProps}
      >
        <option value="">Select Loan Type</option>
        <option value="CONV">Conventional</option>
        <option value="FHA">FHA</option>
        <option value="VA">VA</option>
        <option value="USDA">USDA</option>
      </Select>
      {error && (
        <StyledError>
          <div>{error.message}</div>
        </StyledError>
      )}
    </>
  );
};
