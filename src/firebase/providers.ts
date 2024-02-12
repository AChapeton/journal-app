import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "./config";
import { error } from "console";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try{
    const result = await signInWithPopup(firebaseAuth, googleProvider)
    const {displayName, email, photoURL, uid} = result.user
    return {
      ok: true,
      displayName, 
      email, 
      photoURL, 
      uid
    }
  }catch(error){
    const errorCode = error.code
    const errorMessage = error.message

    return{
      ok: false,
      errorCode,
      errorMessage
    }
  }
}