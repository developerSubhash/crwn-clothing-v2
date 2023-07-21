import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logUser = async function () {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign up Page</h1>
      <button onClick={logUser}>Sign with Google Account</button>
    </div>
  );
}

export default SignIn;
