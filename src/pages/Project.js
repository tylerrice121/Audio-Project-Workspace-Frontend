import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../services/firebase";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { render } from "@testing-library/react";

// const db = app.firestore()
const Project = (props) => {

    const id = props.match.params.id;
    const projects = props.projects;
    const project = projects.find(p => p._id === id);

    const [formState, setFormState] = useState({
        title: "",
        audio: ""
    });

    const [fileUrl, setFileUrl] = useState({
        audio: ""
    })

    const handleChange = (event) => {
        setFormState(prevState => ({
            ...prevState,
            title: event.target.value,
            audio: null
        }))
    }

    const handleFile = async (event) => {
        const file = event.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        const audioFile = await fileRef.getDownloadURL()
        setFileUrl(prevState => ({
            ...prevState,
            audio: audioFile
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createSong(formState, id);
        setFormState({
            title: "",
            audio: null
        })
    }

    const addSong = (event) => {
        const song = project.songs.filter(song => event.target.id === song._id)
        // song.audio = fileUrl.audio
        // ({...song, audio: fileUrl})
            song[0].audio = fileUrl.audio
    
        console.log(song)
        // console.log(...song, fileUrl)
        event.preventDefault()
        props.updateEntireProject(project, props.match.params.id)
        setFileUrl({
            audio: null
        })
    }
    
    const loadingFile = (song) => {
        console.log(fileUrl.audio)
        // console.log('clicked')
        if(fileUrl.audio === null || fileUrl.audio === '') {
            return <h1>loading...</h1>
        } else {
            return <div>
                <h1>loaded!</h1>
                <input id={song._id} type="submit" value="Add"/>
                </div>
        }
        
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
                            <div key={song._id}>
                                
                                <Link to={`/project/${id}/songs/${index}`}>
                                    <p>{song.title}</p>
                                </Link>
                                {song.audio === "" || song.audio === null ?
                                <form id={song._id} onSubmit={addSong}>
                                    <input type="file" onClick={() => loadingFile(song)} onChange={handleFile}/>
                                    {loadingFile(song)}                     
                                </form>                          
                                :
                                <AudioPlayer
                                src={song.audio}
                                // other props here
                              />

                                }
                            </div>
                            )}
                        <br />
                    </>
                    :
                    <p>No Songs Yet</p>
                } 
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" onChange={handleChange} value={formState.title}/>
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