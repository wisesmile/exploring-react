import React, { useState } from "react";
import { Auth } from "aws-amplify";
import FormElement from "./FormElement";
import { useHistory } from "react-router-dom";
import { onError } from "../../libs/errorLib";

export default function ChangePassword() {
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [isChanging, setIsChanging] = useState(false);

  function validateForm() {
    return (
      oldPassword.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
  }

  async function handleChangeClick(event) {
    event.preventDefault();
    setIsChanging(true);
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(currentUser, oldPassword, password);
      history.push("/hello");
    } catch (error) {
      onError(error);
      setIsChanging(false);
    }
  }

  return (
    <div className="form">
      <h3>Change Password</h3>
      <form>
        <FormElement label="Email" forId="sign-in-email">
          <input
            id="sign-in-password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old password"
          />
        </FormElement>
        <FormElement label="Password" forId="sign-in-password">
          <input
            id="sign-in-new-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
          />
        </FormElement>
        <FormElement label="Password" forId="sign-in-password">
          <input
            id="sign-in-confirm-password"
            type="password"
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
        </FormElement>
        <button type="submit" onClick={handleChangeClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
