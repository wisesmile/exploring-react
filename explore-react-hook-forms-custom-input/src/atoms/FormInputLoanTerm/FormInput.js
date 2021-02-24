import React from "react";
import StyledError from "../StyledComponents/styledError";
import styled, { css } from "styled-components";
import sharedStyles from "../StyledComponents/sharedStyles";

const Select = styled.select`
  ${sharedStyles}
`;

export const FormInputLoanTerm = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <select
        id={id}
        class="form-control"
        name={id}
        ref={register}
        data-cy={id}
        {...inputProps}
      >
        <option value="">Select Term</option>
        <option value="10">10 Years</option>
        <option value="15">15 Years</option>
        <option value="20">20 Years</option>
        <option value="30">30 Years</option>
      </select>
      {error && (
        <StyledError>
          <div>{error.message}</div>
        </StyledError>
      )}
    </>
  );
};
