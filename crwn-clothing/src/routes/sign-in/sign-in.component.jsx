import SignUpForm from '../../comoponents/sign-up-form/sign-up-form.component';

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth
} from '../../utilities/firebase/firebase.utilities.js';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;