import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../services/firebase";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// const db = app.firestore()
const Project = (props) => {

    const id = props.match.params.id;
    const projects = props.projects;
    const project = projects.find(p => p._id === id);

    const [formState, setFormState] = useState({
        title: "",
        audio: ""
    });

    const [fileUrl, setFileUrl] = useState(null)

    const handleChange = (event) => {
        setFormState(prevState => ({
            ...prevState,
            title: event.target.value,
            audio: fileUrl
        }))
    }

    const handleFile = async (event) => {
        const file = event.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.createSong(formState, id);
        console.log(formState)
        setFormState({
            title: "",
        })
    }

    const loading = () => {
        return <h1>loading...</h1>
    };

    const loaded = () => {
        return (
            <>
                <h2>{project.title}</h2>
                {
                    project.songs.length ? 
                    <>
                        <br />
                            {project.songs.map((song, index) => 
                            <div>
                                
                                <Link key={song._id} to={`/project/${id}/songs/${index}`}>
                                    <p>{song.title}</p>
                                </Link>
                                  <AudioPlayer
                                  src={song.audio}
                                  // other props here
                                />
                            </div>
                            )}
                        <br />
                    </>
                    :
                    <p>No Songs Yet</p>
                } 
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" onChange={handleChange} value={formState.title}/>
                    <input type="file" onChange={handleFile}/>

                    <input type="submit" value="add song" />
                </form>
            </>
        )
    }

    return (
        <main>
            <h1>Project</h1>
            {project ? loaded() : loading()}
        </main>
    );
};

export default Project;