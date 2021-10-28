import { useState, useEffect } from "react";


const Project = (props) => {

    // TODO: heroku url

    const [songs, setSongs] = useState([])

    const API_URL_SONGS = 'http://localhost:3001/api/songs'

    const getSongs = async () => {
        const response = await fetch(API_URL_SONGS);
        const songs = await response.json();
        setSongs(songs);
    };

    useEffect(() => {
        getSongs();
    }, [])


    const id = props.match.params.id;
    const projects = props.projects;
    const project = projects.find(p => p._id === id);
    console.log(props)

    return (
        <main>
            <h1>Project</h1>
            <h2>{project.title}</h2>
            {songs.map((song, idx) => (
                <h1>{song.song.title}</h1>
            ))}
        </main>
    );
};

export default Project;