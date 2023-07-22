import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

//* SIGN IN COMPONENT
function SignIn() {
  // useEffect(function () {
  //   async function signInWithRedirect() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //   }
  //   signInWithRedirect();
  // }, []);

  const logUser = async function () {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign up Page</h1>
      <button onClick={logUser}>Sign with Google Account</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
