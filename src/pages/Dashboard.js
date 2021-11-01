import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
    const [formState, setFormState] = useState({
        title: "",
        img: "",
        managedBy: props.user.uid
        
    })

    const handleChange = event => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.createProject(formState);
        setFormState({
            title: "",
            img: "",
            managedBy: props.user.uid,
            _id: ""
        })

    }

    return (
        <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <main>
            <h1>Dashboard</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange} 
                        value={formState.title} 
                        name="title" 
                        type="text" 
                    />
                    <input 
                        onChange={handleChange} 
                        value={formState.img} 
                        name="img" 
                        type="text" 
                    />
                    <input type="submit" value="Add Project"/>
                </form>
                <div>
                    {
                        props.projects.map((pr, idx) => (
                            <div key={pr._id}>
                                <Link to={`/project/${pr._id}`} key={idx}>
                                    <h1>{pr.title}</h1>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>

        </>
    );
};

export default Dashboard;