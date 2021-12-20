import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../services/firebase";
import Header from '../components/Header';
import { StyledDash } from "../styles";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useRef } from "react";

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
        setFileState({
            img: "",
            id: ""
        })
    }

    // TODO add loading bar
    const loadingFile = (pr) => {
        if(fileState.img === null || fileState.img === '') {
            return 
        } else if (fileState.id !== pr._id) {
            return
        } else {
            return  <div className="loaded">
                        <Button className="loadedButton" id={pr._id} variant="outlined" type="submit">ADD</Button>
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

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    return (
        <StyledDash>
            <Header user={props.user}/>
                <div className="top">
                    <form onSubmit={handleSubmit} className="form">
                        <TextField 
                            id="standard-basic" 
                            label="New Project" 
                            variant="standard"
                            onChange={handleChange} 
                            value={formState.title} 
                            name="title" 
                            type="text" 
                        />
                        <Button className="addButton" variant="outlined" type="submit">Add</Button>
                    </form> 
                </div>
                {
                    projects.length ?
                    <div className="main">
                    {
                        props.projects.map((pr, idx) => (
                            <div key={pr._id} className="projects">
                        {pr.img === '' || pr.img === null ?
                        <div className="upload">
                            <form id={pr._id} onSubmit={addImg}>
                                <Button className="bottomButton" variant="outlined" type="button" onClick={handleClick}>Upload Image</Button>
                                <input ref={hiddenFileInput} className="choosefile" id={pr._id} type="file" name="img" onChange={handleFile} />
                                {loadingFile(pr)}
                            </form>    
                        </div> 
                        :
                        <section className="imgdiv">
                            <img 
                                style={{height: 350}}
                                src={pr.img} alt={pr.title} 
                            />
                        </section>
                        }
                        <h3>{pr.title}</h3>
                        <div className="bottom">
                            <Link to={`/project/${pr._id}`} key={idx}>
                                <Button className="bottomButton" variant="outlined" type="button">VIEW</Button>
                            </Link>
                            <Button className="bottomButton" variant="outlined" type="submit" onClick={()=> handleDelete(pr._id)}>DELETE</Button>
                        </div>
                    </div>
                    )).reverse()
                    }
                </div>
                :
                <div className="noprojects">
                    <h2>Nothing to display yet</h2>
                    <h3>Add a project to get started</h3>
                </div>
                }

        </StyledDash>
    );
};

export default Dashboard;