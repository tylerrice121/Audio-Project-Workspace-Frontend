import {StyledHome} from '../styles.js'
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
const Home = (props) => {
    return (
        <StyledHome>
            <Paper className="circle">         
                <div className="title">
                    <h1>APW</h1>
                    <h2>Audio Project Workspace</h2>
                </div>
                <div className="homeButtons">
                    <Link to={'/login'}>
                        <h3>Login</h3>
                    </Link>
                    <Link to={'/signup'}>
                        <h3>Signup</h3>
                    </Link>
                </div>
            </Paper>
        </StyledHome>  
    );
};

export default Home;