import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { FormInputArea } from "../../atoms/FormInputArea";
import { FormInputGamma as FormInput } from "../../atoms/FormInputGamma";
import { FormInputLoanDropdown } from "../../atoms/FormInputLoanDropdown";
import { FormInputRadio } from "../../atoms/FormInputRadio";
import { FormInputTip } from "../../atoms/FormInputTip";
import { FormInputFilingStatus } from "../../atoms/FormInputFilingStatus";
import StyledButton from "../../atoms/StyledComponents/styledButton";
import StyledForm from "../../atoms/StyledComponents/styledForm";
import StyledFormWrapper from "../../atoms/StyledComponents/styledFormWrapper";
import { tipSp } from "../../atoms/TipData";
import { CASH_ONLY } from "../../atoms/RegExConstants";

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    validationSchema: Yup.object({
      login: Yup.string()
        .max(10, "Login must be shorter than 10 characters")
        .required("Required"),
      password: Yup.string()
        .min(6, "Password should be longer than 6 characters")
        .required("Required"),
      sp: Yup.string().matches(CASH_ONLY, "cash only").required("Required"),
      filing_status: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id="login"
            name="login"
            type="text"
            label="Login"
            register={register}
            error={errors.login}
          />
          <FormInput
            id="fname"
            name="fname"
            type="text"
            label="Name"
            register={register}
            error={errors.fname}
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            register={register}
            error={errors.password}
          />
          <FormInput
            id="phone"
            name="phone"
            type="text"
            label="Phone"
            register={register}
            error={errors.phone}
          />
          <FormInput
            id="sp"
            name="sp"
            type="text"
            label="Sales Price"
            register={register}
            error={errors.sp}
          />
          <FormInputArea
            id="flubba"
            name="flubba"
            type="text"
            label="Flubba"
            register={register}
            error={errors.flubba}
          />
          <FormInputRadio
            id="available"
            name="Available"
            label="Available"
            register={register}
            error={errors.available}
          />
          <FormInputRadio
            id="va_exmpt"
            name="va_exempt"
            label="VA Exempt"
            register={register}
            error={errors.va_exempt}
          />
          <FormInputTip
            id="tip"
            tip={tipSp}
            name="tip"
            type="text"
            label="Tip"
            register={register}
            error={errors.tip}
          />
          <FormInputLoanDropdown
            id="loan"
            name="loan"
            label="Loan Type"
            register={register}
            error={errors.loan}
          />
          <FormInputFilingStatus
            id="filing_status"
            name="filing_status"
            label="Filing Status"
            register={register}
            error={errors.filing_status}
          />
          <StyledButton type="submit" data-cy="btn-submit">
            Login
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};
