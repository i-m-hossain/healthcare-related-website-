import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initAuth from "../Firebase/Firebase.init";
initAuth()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase =()=>{
    const [user,setUser] = useState()

    const signInUsingGoogle =() =>{    
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error.message);
        })

    }
    return {
        user,
        signInUsingGoogle
    }
}

export default useFirebase;