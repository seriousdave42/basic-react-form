import React, { useState } from 'react';
const HookForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

//     const onSubmitHandler = event => {
//         event.preventDefault();
//         console.log(formState);
//     }

    return(
        <div>
            <form>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                {(formState.firstName.length < 2 && formState.firstName.length > 0) && <p>First Name must be at least 2 characters</p>}
                <br/>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                {(formState.lastName.length < 2 && formState.lastName.length > 0) && <p>Last Name must be at least 2 characters</p>}
                <br/>
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {(formState.email.length < 5 && formState.email.length > 0) && <p>Email must be at least 5 characters</p>}
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                {(formState.password.length < 8 && formState.password.length > 0) && <p>Password must be at least 8 characters</p>}
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                {(formState.password !== formState.confirmPassword && formState.confirmPassword.length > 0) && <p>Passwords must match</p>}
                <br/>
            </form>
        </div>
    );
}

export default HookForm;