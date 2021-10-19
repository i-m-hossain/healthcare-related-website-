import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { AiOutlineGoogle } from 'react-icons/ai'

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { signInUsingGoogle } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const handleSignInWithGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(location?.state?.from)
            })
    }
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h4 className="text-center fw-bold text-danger">Register</h4>
            <div className="d-flex justify-content-center">

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input placeholder="Your name" {...register("name", { required: true })} className="mb-2 p-1" /> <br />
                    <input placeholder="Your email" {...register("email", { required: true })} className="mb-2 p-1" /> <br />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder="Your password" {...register("password", { required: true })} className="mb-2 p-1" /> <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

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