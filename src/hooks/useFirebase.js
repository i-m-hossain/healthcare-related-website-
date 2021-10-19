import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/Firebase.init";
initAuth()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(
                setIsLoading(false)
            )


    }
    //observe the user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                setUser(user)
                setIsLoading(false)
            } else {
                console.log('user is signed out');
            }
        })
        
    }, [])
    // logging out the user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setIsLoading(false)
            }).catch((error) => {
                console.log(error.message)
            });
    }
    return {
        isLoading,
        logOut,
        user,
        signInUsingGoogle
    }
}

export default useFirebase;