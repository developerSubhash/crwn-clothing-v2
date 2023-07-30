import { useState, useContext } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

function SigInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  function ResetAll() {
    setFormFields(defaultFormFields);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  async function SignInWithGoogle() {
    await signInWithGooglePopup();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      ResetAll();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("worng password");
          break;

        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.log(error);
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogle}
          >
            SIGN UP WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SigInForm;
