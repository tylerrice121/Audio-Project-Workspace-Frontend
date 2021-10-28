
import { useState } from "react";

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
        // TODO: add user's uid to form
        props.createProject(formState);
        setFormState({
            title: "",
            img: "",
            managedBy: props.user.uid
        })

    }

    return (
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
                        props.projects.map(pr => (
                            <div key={pr._id}>
                                <h1>{pr.title}</h1>
                                {/* <h1>{pr.img}</h1> */}
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};

export default Dashboard;