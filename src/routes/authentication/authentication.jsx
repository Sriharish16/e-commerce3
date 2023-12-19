// import {
// //   auth,
//   signInWithGooglePopUp,
//   createUserDocumentFromAuth,
// //   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils.jsx";
import './authentication.styles.scss'
import SignInForm from "../../components/sign-in/sign-in-form.component.jsx";
import SignUpForm from '../../components/sign-up/sign-up-form.component.jsx'
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const Authentication = () => {

//    useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getRedirectResult(auth);
//         if (response) {
//           const userDocRef = await createUserDocumentFromAuth(response.user);
//         }
//         console.log(response);
//       } catch (error) {
//         console.error("Error in fetching data: ", error);
//       }
//     };
//     fetchData();
//   }   , []);

 

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
};
export default Authentication;
