import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../services/firebase";

const Dashboard = (props) => {
    
    const projects = props.projects

    const [formState, setFormState] = useState({
        title: "",
        img: "",
        managedBy: props.user.uid
    })

    const [fileState, setFileState] = useState(null)

    const handleFile = async (event) => {
        const file = event.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileState(await fileRef.getDownloadURL())
    }

    const handleChange = (event) => {
        setFormState(prevState => ({
            ...prevState,
            title: event.target.value,
            img: fileState
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.createProject(formState);
        setFormState({
            title: "",
            img: null,
            managedBy: props.user.uid,
            _id: ""
        })
    }

    const handleDelete = (id) => {
        console.log(id)
        const project = projects.find(p => p._id === id);
        props.deleteProject(project, id)
        // console.log(project)
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
                    <input type="file" onChange={handleFile}/>
                    <input type="submit" value="Add Project"/>
                </form>
                <div>
                    {
                        props.projects.map((pr, idx) => (
                            <div key={pr._id}>
                                    <h2>image</h2>
                                    <img src={pr.img} alt={pr.title} />
                                <Link to={`/project/${pr._id}`} key={idx}>
                                    <h1>{pr.title}</h1>
                                </Link>
                                <button type="submit" onClick={()=> handleDelete(pr._id)}>DELETE</button>
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