import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../services/firebase";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { TextField} from "@mui/material";
import '@fontsource/roboto/400.css';

const Project = (props) => {

    const id = props.match.params.id;
    const projects = props.projects;
    const project = projects.find(p => p._id === id);

    const [formState, setFormState] = useState({
        title: "",
        audio: ""
    });

    const [fileUrl, setFileUrl] = useState({
        audio: "",
        id: ""
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
            audio: audioFile,
            id: event.target.id
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
        song[0].audio = fileUrl.audio
        event.preventDefault()
        props.updateEntireProject(project, props.match.params.id)
        setFileUrl({
            audio: null,
            id: ""
        })
    }


    const handleDelete = (id) => {
        const newSongList = project.songs.filter(song => song._id !== id)
        project.songs = newSongList
        console.log(project.songs)
        props.updateEntireProject(project, props.match.params.id)
    }
    
    const loadingFile = (song) => {
        if(fileUrl.audio === null || fileUrl.audio === ''){
            return
        } else if (song._id !== fileUrl.id){
            return 
        } else {
            return  <div>
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
                            <Box key={song._id}>
                                <Paper>
                                    <Link to={`/project/${id}/songs/${index}`}>
                                        <p>{song.title}</p>
                                    </Link>
                                    {song.audio === "" || song.audio === null ?
                                    <form id={song._id} onSubmit={addSong}>
                                        <TextField id={song._id} type="file" onChange={handleFile}/>

                                        {loadingFile(song)}
                                    </form>                          
                                    :
                                    <>
                                    <AudioPlayer
                                    src={song.audio}
                                    />
                                    </>                          
                                    }
                                    <Button type="submit" onClick={()=> handleDelete(song._id)}>DELETE SONG</Button>
                                </Paper>
                            </Box>
                            )}
                        <br />
                    </>
                    :
                    <p>No Songs Yet</p>
                } 
                <form onSubmit={handleSubmit}>
                    <TextField type="text" name="title" onChange={handleChange} value={formState.title}/>
                    <TextField type="submit" value="add song" />
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