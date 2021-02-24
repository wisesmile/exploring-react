import React from "react";
import StyledError from "../StyledComponents/styledError";
import styled, { css } from "styled-components";

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  display: block;
  width: 50%;
  ${sharedStyles}
`;

export const FormInputGamma = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledInput ref={register} id={id} data-cy={id} {...inputProps} />
      {error && (
        <StyledError>
          <div>{error.message}</div>
        </StyledError>
      )}
    </>
  );
};
