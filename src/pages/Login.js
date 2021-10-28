import { signIn } from "../services/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../services/firebase";
import { isCompositeComponentWithType } from "react-dom/test-utils";

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
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input value={logIn.email} type="text" name="email" onChange={handleChange}/>
                <input type="submit" value="Login"/>
            </form>
            <button onClick={signIn}>Login With Google</button>
            <Link to='/signup'>Sign Up</Link>
        </main>
    );
};

export default Login;