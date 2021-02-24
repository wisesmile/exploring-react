import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Areas from "../../atoms/Areas";
import { FormInputFilingStatus } from "../../atoms/FormInputFilingStatus";
import { FormInputRadio } from "../../atoms/FormInputRadio";
//import { FormInputTip } from "../../atoms/FormInputTip";
import { FormInputTip } from "../../atoms/FormInputTipAltOne";
import { FormInputLoanTerm } from "../../atoms/FormInputLoanTerm";
import { FormInputLoanType } from "../../atoms/FormInputLoanType";
import { FormInputStatesDropdown } from "../../atoms/FormInputStates";
import { FormInputAreasDropdown } from "../../atoms/FormInputAreas";
import { CASH_ONLY } from "../../atoms/RegExConstants";
import StyledButton from "../../atoms/StyledComponents/styledButton";
import StyledForm from "../../atoms/StyledComponents/styledForm";
import StyledFormWrapper from "../../atoms/StyledComponents/styledFormWrapper";
import {
  tipCust_name,
  tipDoType,
  tipFiling_status,
  tipFtbuyer,
  tipInputcred,
  tipInput_dol_cred,
  tipInput_ltv,
  tipInput_ma,
  tipInput_uw_fee,
  tipInt_rate,
  tipLim_piti,
  tipM_debts,
  tipOrg_fee,
  tipProp_t,
  tipQ_income,
  tipSp,
  tipS_cred,
  tipTerm,
  tipT_cash,
  tipUse_ratios,
} from "../../atoms/TipData";

const schema = Yup.object({
  sp: Yup.string().matches(CASH_ONLY, "Numeric Required").required("Required"),
  int_rate: Yup.string()
    .matches(CASH_ONLY, "Numeric Required")
    .required("Required"),
  filing_status: Yup.string().required("Required"),
  q_income: Yup.string()
    .matches(CASH_ONLY, "Numeric Required")
    .required("Required"),
  m_debts: Yup.string().matches(CASH_ONLY, "Numeric Required"),
});

export const BuyerChoiceForm = () => {
  const { register, handleSubmit, watch, errors, getValues } = useForm({
    mode: "onBlur",
    validationSchema: schema,
  });

  const atLeastOne = () =>
    getValues("doType").length ? true : "Please tell me if this is too hard.";

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  let selectOptions = [];
  const state = watch("state");

  if (state) {
    selectOptions = Areas(state);
  } else {
    selectOptions = [];
  }

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormInputStatesDropdown
            id="state"
            name="state"
            type="text"
            label="State"
            register={register}
            error={errors.area}
          />

          <FormInputAreasDropdown
            id="state"
            name="state"
            type="text"
            label="State"
            selectOptions={selectOptions}
            register={register}
            error={errors.area}
          />

          <br />
          <br />
          <FormInputLoanType
            id="state"
            name="state"
            type="text"
            label="State"
            selectOptions={selectOptions}
            register={register}
            error={errors.area}
          />

          <br />
          <br />
          <FormInputTip
            id="int_rate"
            name="int_rate"
            type="text"
            label="Interest Rate"
            tip={tipInt_rate}
            register={register}
            error={errors.int_rate}
          />
          <FormInputLoanTerm
            id="term"
            name="term"
            type="text"
            label="Term"
            tip={tipTerm}
            register={register}
            error={errors.term}
          />
          <br />
          <br />
          <FormInputTip
            id="sp"
            name="sp"
            type="text"
            label="Sales Price"
            tip={tipSp}
            register={register}
            error={errors.sp}
          />
          <FormInputTip
            id="q_income"
            name="q_income"
            type="text"
            label="Annual Income"
            tip={tipQ_income}
            register={register}
            error={errors.q_income}
          />
          <FormInputTip
            id="m_debts"
            name="m_debts"
            type="text"
            label="Monthly Debts"
            tip={tipM_debts}
            register={register}
            error={errors.m_debts}
          />
          <FormInputTip
            id="inputcred"
            name="inputcred"
            type="text"
            label="Credit Score"
            tip={tipInputcred}
            register={register}
            error={errors.inputcred}
          />
          <FormInputFilingStatus
            id="filing_status"
            name="filing_status"
            type="text"
            label="Married"
            tip={tipFiling_status}
            register={register}
            error={errors.filing_status}
          />
          <FormInputRadio
            id="ftbuyer"
            name="ftbuyer"
            type="text"
            label="First Time Buyer"
            tip={tipFtbuyer}
            register={register}
            error={errors.ftbuyer}
          />

          <StyledButton type="submit" data-cy="btn-optional">
            Optional Fields
          </StyledButton>

          <FormInputRadio
            id="use_ratios"
            name="use_ratios"
            type="text"
            label="Use Ratios"
            tip={tipUse_ratios}
            register={register}
            error={errors.use_ratios}
          />
          <FormInputTip
            id="t_cash"
            name="t_cash"
            type="text"
            label="Available Cash"
            tip={tipT_cash}
            register={register}
            error={errors.t_cash}
          />
          <FormInputTip
            id="s_cred"
            name="s_cred"
            type="text"
            label="Seller Credit"
            tip={tipS_cred}
            register={register}
            error={errors.s_cred}
          />
          <FormInputTip
            id="input_dol_cred"
            name="input_dol_cred"
            type="text"
            label="Seller Credit $"
            tip={tipInput_dol_cred}
            register={register}
            error={errors.input_dol_cred}
          />
          <FormInputTip
            id="prop_t"
            name="prop_t"
            type="text"
            label="Property Taxes"
            tip={tipProp_t}
            register={register}
            error={errors.prop_t}
          />
          <FormInputTip
            id="lim_piti"
            name="lim_piti"
            type="text"
            label="Limit Payment $"
            tip={tipLim_piti}
            register={register}
            error={errors.lim_piti}
          />
          <FormInputTip
            id="input_ltv"
            name="input_ltv"
            type="text"
            label="Limit Loan To Value"
            tip={tipInput_ltv}
            register={register}
            error={errors.input_ltv}
          />
          <FormInputTip
            id="input_ma"
            name="input_ma"
            type="text"
            label="Limit Loan Amount"
            tip={tipInput_ma}
            register={register}
            error={errors.input_ma}
          />
          <FormInputTip
            id="input_uw_fee"
            name="input_uw_fee"
            type="text"
            label="Lender Fees"
            tip={tipInput_uw_fee}
            register={register}
            error={errors.input_uw_fee}
          />
          <FormInputTip
            id="org_fee"
            name="org_fee"
            type="text"
            label="Loan Origination Fee"
            tip={tipOrg_fee}
            register={register}
            error={errors.org_fee}
          />
          <FormInputRadio
            id="va_fee_ex"
            name="va_fee_ex"
            label="VA Exempt"
            register={register}
            error={errors.va_exempt}
          />
          <FormInputTip
            id="cust_name"
            name="cust_name"
            type="text"
            label="Customer Name"
            tip={tipCust_name}
            register={register}
            error={errors.cust_name}
          />
          <FormInputTip
            id="cust_email"
            name="cust_email"
            type="text"
            label="Customer Email"
            tip={tipCust_name}
            register={register}
            error={errors.cust_email}
          />
          <FormInputTip
            id="cust_phone"
            name="cust_phone"
            type="text"
            label="Cust Phone"
            tip={tipCust_name}
            register={register}
            error={errors.cust_phone}
          />
          <StyledButton type="submit" data-cy="btn-submit">
            Submit
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};
