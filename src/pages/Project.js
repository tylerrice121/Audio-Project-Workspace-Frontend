import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { app } from "../services/firebase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Button from '@mui/material/Button';
import { TextField} from "@mui/material";
import { StyledProject } from "../styles";


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

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    
    const loadingFile = (song) => {
        if(fileUrl.audio === null || fileUrl.audio === ''){
            return
        } else if (song._id !== fileUrl.id){
            return 
        } else {
            return  <>
                        <Button id={song._id} className="uploadSongButton" variant="outlined" type="submit">add</Button>
                        {/* <input id={song._id} type="submit" value="Add"/> */}
                    </>
        }
    }
  
    const loading = () => {
        return <h1>loading...</h1>
    };
    
    const loaded = () => {
        return (
            
            <StyledProject>
            <Header user={props.user}/>
                <div className="top">
                    <h2>{project.title}</h2>
                    <form onSubmit={handleSubmit} className="newsong">
                        <TextField 
                            id="standard-basic" 
                            label="New Song" 
                            variant="standard"
                            onChange={handleChange} 
                            value={formState.title} 
                            name="title" 
                            type="text" 
                        />
                        <Button variant="outlined" type="submit">ADD</Button>
                    </form>
                </div>
                {
                    project.songs.length ? 
                <div className="main">
                    {project.songs.map((song, index) => 
                    <div key={song._id} className="songs">
                        <Link to={`/project/${id}/songs/${index}`} className="songTitle">
                            <h3>{song.title}</h3>
                        </Link>
                        {song.audio === "" || song.audio === null ?
                        <form id={song._id} onSubmit={addSong}>
                            <Button className="uploadSongButton" variant="outlined" type="button" onClick={handleClick}>Upload mp3</Button>
                            <input className="uploadSong" ref={hiddenFileInput} id={song._id} type="file" onChange={handleFile}/>
                            {loadingFile(song)}
                        </form>                          
                        :
                        <>
                            <AudioPlayer
                                src={song.audio}
                            />
                        </>                          
                        }
                        <div className="buttonsBottom">
                            <Link to={`/project/${id}/songs/${index}`}>
                                <Button className="buttonBelow" variant="outlined" type="button">todo list</Button>
                            </Link>
                            <Button className="buttonBelow" variant="outlined" type="submit" onClick={()=> handleDelete(song._id)}>DELETE SONG</Button>
                        </div>
                    </div>
                    ).reverse()}
                </div>
                    :
                <h1 className="nosongs">No Songs Yet</h1>
                } 
            </StyledProject>
            
        )
    }

    return (
        <>
            {project ? loaded() : loading()}
        </>
    );
};

export default Project;