import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle} = useFirebase()
    return (
        <div>
            <button onClick={signInUsingGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;