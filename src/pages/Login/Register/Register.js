import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { AiOutlineGoogle } from 'react-icons/ai'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // google login 
    const { signInUsingGoogle, createUserUsingEmail, error, setUser, updateUser, setError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const handleSignInWithGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location?.state?.from)
            })
 
    }

    // login with email and password
    const onSubmit = data => {
        createUserUsingEmail(data.name, data.email, data.password)
            .then(result => {
                setUser(result.user)
                updateUser(data.name)
                console.log(result.user);
                history.push('/home')
                history.go(0)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    };

    return (
        <div>
            <h4 className="text-center fw-bold text-danger">Register</h4>
            <div className="d-flex justify-content-center">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Your name" {...register("name", { required: true })} className="mb-2 p-1" /> <br />
                    {errors.name && <span className="text-danger">User name is required <br /></span>}

                    <input type="email" placeholder="Your email" {...register("email", { required: true })} className="mb-2 p-1" /> <br />
                    {errors.email && <span className="text-danger">Email is required <br /></span>}

                    <input type="password" placeholder="Your password" {...register("password", { required: true })} className="mb-2 p-1" /> <br />
                    {errors.password && <span className="text-danger">Password is required <br /></span>}
                    {error && <span className="text-danger">{error} <br /> <br /></span>}
                    
                    <input type="submit" className="btn btn-danger" value="Register" />
                    <div className="mt-3">Already registered? <Link to="/login" className="text-secondary">Login</Link></div>
                </form>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center">
                <div>---------OR----------</div>

                <button onClick={handleSignInWithGoogle} className="btn-danger px-4 py-2 mt-2 border-0 rounded"> <AiOutlineGoogle></AiOutlineGoogle> Sign in with Google</button>

            </div>

        </div>
    );
};

export default Register;