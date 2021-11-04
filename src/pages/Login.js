import { signIn } from "../services/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../services/firebase";
import Paper from '@mui/material/Paper';
import { StyledLogin } from "../styles";
import {TextField} from '@mui/material';

const Login = (props) => {
const [logIn, setLogIn] = useState({
    email: "",
    password: ""
})

const handleChange = (event) => {
    setLogIn(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
    }))
}
const handleSubmit = (event) => {
    event.preventDefault();

    setLogIn({
        email: "",
        password: ""
    })
    auth.signInWithEmailAndPassword(logIn.email, logIn.password)
    .then(cred => {
        console.log(cred);
    }).catch((error) => {
        console.log(error.code);
        alert(error.message)
    });
}


    return (
        <StyledLogin>
            <Paper className="circle">
                <div className="title">
                    <h1>APW</h1>
                    <h2>Login</h2>
                </div>
                <div className="homeButtons">
                    <div className="login">
                        <form onSubmit={handleSubmit} className="form">
                            <TextField className="email"id="standard-basic" label="email" variant="standard" value={logIn.email} type="text" name="email" onChange={handleChange}/>
                            <TextField id="standard-basic" label="password" variant="standard" value={logIn.password} type="password" name="password" onChange={handleChange}/>     
                            <input className="button" type="submit" value="Login"/>
                        </form>
                        <button className="google" onClick={signIn}>Login With Google</button>
                    </div>
                    <div className="signup">
                        <p>Need to create an account?</p>
                        <Link to='/signup'>
                            <h3>Sign Up</h3>
                        </Link>
                    </div>
                </div>
            </Paper>
        </StyledLogin>
    );
};

export default Login;