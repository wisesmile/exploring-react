import React from "react";
import StyledError from "../StyledComponents/styledError";
import styled, { css } from "styled-components";
import Tooltip from "../ToolTip";

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

export const FormInputTip = ({
  register,
  error,
  label,
  id,
  tip,
  ...inputProps
}) => {
  return (
    <>
      <Tooltip content={tip} direction="right">
        TIP <label htmlFor={id}>{label}</label>
      </Tooltip>
      <StyledInput ref={register} id={id} data-cy={id} {...inputProps} />
      {error && (
        <StyledError>
          <div>{error.message}</div>
        </StyledError>
      )}
    </>
  );
};
