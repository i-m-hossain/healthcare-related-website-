import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { AiOutlineGoogle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    //sign in using google
    const { signInUsingGoogle, loginWithEmailAndPassword, setError } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const handleSignInWithGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location?.state?.from)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // hook form
    const onSubmit = data => {
        console.log('hh');
        loginWithEmailAndPassword(data.email, data.password)
            .then(result => {
                history.push(location?.state?.from)
            })
            .catch(error => {
                setError(error.message)
            })
    };

    return (
        <div>
            <h4 className="text-center fw-bold text-danger">Login</h4>
            <div className="d-flex justify-content-center">

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type='email' placeholder="Your email" {...register("email", { required: true })} className="mb-2 p-1" /> <br />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input type="password" placeholder="Your password" {...register("password", { required: true })} className="mb-2 p-1" /> <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" className="btn btn-danger" value="Login" />
                    <p className="mt-3">Not Registered? <Link to="/register" className="text-secondary">Register</Link></p>
                </form>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center">
                <div>---------OR----------</div>

                <button onClick={handleSignInWithGoogle} className="btn-danger px-4 py-2 mt-2 border-0 rounded"> <AiOutlineGoogle></AiOutlineGoogle> Sign in with Google</button>

            </div>

        </div>
    );
};

export default Login;