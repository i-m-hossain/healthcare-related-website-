import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { AiOutlineGoogle } from 'react-icons/ai'

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // google login 
    const { signInUsingGoogle, createUserUsingEmail, error } = useAuth()
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
        createUserUsingEmail(data.name, data.email,data.password)
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

                    <input type="submit" className="btn btn-danger" value="Login" />
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