import { signIn } from "../services/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../services/firebase";
import { isCompositeComponentWithType } from "react-dom/test-utils";

const Login = (props) => {
const [logIn, setLogIn] = useState(null)

const handleChange = (event) => {
    setLogIn(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
    }))
}
const handleSubmit = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(logIn.email, logIn.password)
    .then(cred => {
        console.log(cred);
    }).catch((error) => {
        console.log(error.code);
        alert(error.message)
        // setLogIn(null)
    });
}


    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleChange}/>
                <input type="password" name="password" onChange={handleChange}/>
                <input type="submit" value="Login"/>
            </form>
            <button onClick={signIn}>Login With Google</button>
            <Link to='/signup'>Sign Up</Link>
        </main>
    );
};

export default Login;