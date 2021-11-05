import { auth } from "../services/firebase";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import { StyledSignup } from "../styles";
import {TextField} from '@mui/material';
import { Link } from "react-router-dom";

const Signup = (props) => {
    const [signUp, setSignUp] = useState(null);

    const handleChange = (event) => {
        setSignUp(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(signUp.email, signUp.password)
    };

    return (
        <StyledSignup>
            <Paper className="circle">
                <div className="title">
                    <h1>APW</h1>
                    <h2>Signup</h2>
                </div>
                <div className="homeButtons">
                    <div className="login">
                        <form onSubmit={handleSubmit} className="form">
                            <TextField 
                                id="standard-basic" 
                                label="email" 
                                variant="standard"
                                type="text" 
                                name="email" 
                                placeholder="enter email" 
                                onChange={handleChange}
                            />
                            <TextField 
                                id="standard-basic" 
                                label="password" 
                                variant="standard"
                                type="password" 
                                name="password" 
                                placeholder="choose a password" 
                                onChange={handleChange}
                            />
                            <input className="button" type="submit" value="Signup"/>
                        </form>
                    </div>
                    <div className="signup">
                        <p>Already have an account?</p>
                        <Link to='/login'>
                            <h3>Login</h3>
                        </Link>
                    </div>
                </div>
            </Paper>
        </StyledSignup>  
    );
};

export default Signup;