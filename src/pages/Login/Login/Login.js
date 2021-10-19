import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle} = useFirebase()
    const history = useHistory()
    const location = useLocation()
    console.log(location?.state?.from);
    const handleSignInWithGoogle =()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(location?.state?.from)
        })
    }
    return (
        <div>
            <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
            
        </div>
    );
};

export default Login;