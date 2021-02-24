import React from "react";
import StyledError from "../StyledComponents/styledError";
import styled, { css } from "styled-components";
import sharedStyles from "../StyledComponents/sharedStyles";

const Select = styled.select`
  ${sharedStyles}
`;

export const FormInputLoanType = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <label for="filingstatus">Loan Type</label>
      <input
        class="form-check-input"
        type="checkbox"
        id="conventional"
        value="CONV"
        name="doType"
        ref={register}
        data-cy="doConvAlpha"
      />
      <label class="form-check-label" for="married">
        Conventional
      </label>
      <input
        class="form-check-input"
        type="checkbox"
        id="single"
        value="FHA"
        name="doType"
        ref={register}
        data-cy="doFhaAlpha"
      />
      <label class="form-check-label" for="single">
        FHA
      </label>
      <input
        class="form-check-input"
        type="checkbox"
        id="single"
        value="VA"
        name="doType"
        ref={register}
        data-cy="doVaAlpha"
      />
      <label class="form-check-label" for="single">
        VA
      </label>
      <input
        class="form-check-input"
        type="checkbox"
        id="single"
        value="USDA"
        name="doType"
        ref={register}
        data-cy="doUsdaAlpha"
      />
      <label class="form-check-label" for="single">
        USDA
      </label>
    </>
  );
};
