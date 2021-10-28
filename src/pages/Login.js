import { signIn } from "../services/firebase";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <main>
            <h1>Login</h1>
            <button>Login With Google</button>
            <Link to='/signup'>Sign Up</Link>
        </main>
    );
};

export default Login;