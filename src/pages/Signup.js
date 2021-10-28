import { auth } from "../services/firebase";
import { useState } from "react";

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
        .then(cred => {
            console.log(cred);
        });
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="email" 
                placeholder="enter email" 
                onChange={handleChange}
                />
                <input type="password" 
                name="password" 
                placeholder="choose a password" 
                onChange={handleChange}
                />
                <input type="submit" value="SIGN UP"/>
            </form>
        </main>
    );
};

export default Signup;