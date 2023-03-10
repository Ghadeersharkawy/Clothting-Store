import {
    createUserDocumentFromAuth,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        // const response = await signInWithGooglePopup();
        //console.log(response);
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Component</h1>
            <button onClick={logGoogleUser}>Sign In With Google</button>

        </div>
    )
}
export default SignIn;