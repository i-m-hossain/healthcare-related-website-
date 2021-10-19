import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/Firebase.init";
initAuth()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error,setError] = useState('')

    // signin using google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(
                setIsLoading(false)
            )


    }
    // sign in using email and password
    const createUserUsingEmail = (name, email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(result=>{
            console.log('profile updated');
            setError('')
        })
        .catch(error =>{
            setError(error.message)
        })
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
                setIsLoading(false)
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
        signInUsingGoogle,
        error, 
        createUserUsingEmail,
        setUser,
        updateUser,
        setError

    }
}

export default useFirebase;