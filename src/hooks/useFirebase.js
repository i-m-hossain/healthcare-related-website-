import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/Firebase.init";
initAuth()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase =()=>{
    const [user, setUser] = useState({})

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
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                console.log('user is signed out');
            }
        })
    },[])
    return {
        user,
        signInUsingGoogle
    }
}

export default useFirebase;