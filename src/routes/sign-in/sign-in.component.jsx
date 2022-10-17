import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  useEffect(() => {
    async function getUserRef() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    getUserRef().catch(console.error);
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign In With Google</h1>
      <button onClick={logGoogleUser}>Sign In</button>
      <button onClick={signInWithGoogleRedirect}>Sign In with Redirect</button>
    </div>
  );
};

export default SignIn;
