import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SigInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

//* SIGN IN COMPONENT
function Authentication() {
  return (
    <div className="authentication-container">
      <SigInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
