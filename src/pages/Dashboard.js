import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../services/firebase";
import Header from '../components/Header';

const Dashboard = (props) => {
    
    const projects = props.projects

    const [formState, setFormState] = useState({
        title: "",
        img: null,
        managedBy: props.user.uid
    })

    const [fileState, setFileState] = useState({
        img: "",
        id: ""
    })
    
    const handleFile = async (event) => {
        const file = event.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        const imgFile = await fileRef.getDownloadURL()
        setFileState(prevState => ({
            ...prevState,
            img: imgFile,
            id: event.target.id
        }))
    }

    const addImg = (event) => {
        event.preventDefault()
        const project = projects.filter(project => event.target.id === project._id)
        project[0].img = fileState.img
        props.updateEntireProject(project[0], project[0]._id)
        console.log(project[0]._id)
        setFileState({
            img: "",
            id: ""
        })
    }
    console.log(projects)


    const loadingFile = (pr) => {
        if(fileState.img === null || fileState.img === '') {
            return 
        } else if (fileState.id !== pr._id) {
            return
        } else {
            return  <div>
                        <h1>loaded!</h1>
                        <input id={pr._id} type="submit" value="Add"/>
                    </div>
        }  
    }

    const handleChange = (event) => {
        setFormState(prevState => ({
            ...prevState,
            title: event.target.name === 'title' && event.target.value, 
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.createProject(formState);
        setFormState({
            title: "",
            managedBy: props.user.uid,
            img: null
        })
    }

    const handleDelete = (id) => {
        const project = projects.find(p => p._id === id);
        props.deleteProject(project, id)
    }

    return (
        <>
        <main>
        <Header user={props.user}/>
            <h1>Dashboard</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange} 
                        value={formState.title} 
                        name="title" 
                        type="text" 
                    />
                    <input type="submit" value="Add Project"/>
                </form>
                <div>
                    {
                        props.projects.map((pr, idx) => (

                            <div key={pr._id}>
                            {pr.img === '' || pr.img === null ?
                            <>
                            <p>upload image</p>
                            <form id={pr._id} onSubmit={addImg}>
                                <input id={pr._id} type="file" name="img" onChange={handleFile} />
                                {loadingFile(pr)}
                            </form>    
                            </> 
                            :
                            <img style={{width: 350}}src={pr.img} alt={pr.title} />
                             
                            }
                                <Link to={`/project/${pr._id}`} key={idx}>
                                    <h1>{pr.title}</h1>
                                </Link>
                                <button type="submit" onClick={()=> handleDelete(pr._id)}>DELETE</button>
                            </div>
                        )).reverse()
                    }
                </div>
            </section>
        </main>

        </>
    );
};

export default Dashboard;