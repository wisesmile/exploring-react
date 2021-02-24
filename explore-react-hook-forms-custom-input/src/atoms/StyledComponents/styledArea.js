import styled, { css } from "styled-components";
import sharedStyles from "./sharedStyles";

const StyledArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

export default StyledArea;
