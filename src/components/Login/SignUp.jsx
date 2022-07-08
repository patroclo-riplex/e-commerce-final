import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./style/loginScreen.css";

const SignUp = () => {

    const signUpThunk = data => {
        return dispatch => {
            dispatch(setIsLoading(true));
            return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users', data)
                .finally(() => dispatch(setIsLoading(false)));
        }
    }

    const setIsLoading = isLoading => ({
        type: appActions.setIsLoading,
        payload: isLoading
    })

    const { register, formState: { errors }, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submit = data => {
        dispatch(signUpThunk(data))
            .then(() => navigate(-1))
    }

    console.log(errors);

    return (
        <div className="login__form">
            <div className="main-container">

                <form className="login__title" onSubmit={handleSubmit(submit)}>
                    <strong>Sign Up</strong>
                    <div className="login__label">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email"
                            { ...register("email") }
                        />
                    </div>
                    <div className="login__label">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            id="firstName"
                            { ...register("firstName") }
                        />
                    </div>
                    <div className="login__label">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName"
                            { ...register("lastName") }
                        />
                    </div>
                    <div className="login__label">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" { ...register("password") } />
                    </div>
                    <div className="login__label">
                        <label htmlFor="phone">Phone (10 characters)</label>
                        <input 
                            type="tel" 
                            id="phone"
                            { ...register("phone", { required: true, maxLength: 10, minLength: 10 }) }
                        />
                    </div>
                    <div className="error-message">
                        {errors.phone && "The phone length is 10 characters"}
                    </div>
                    <button className='submit-button'>
                        Sign up
                    </button>
                    <div className="switch-forms">
                        Already have an account? {" "}
                        <button type="button" onClick={() => navigate("/login")}>
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;