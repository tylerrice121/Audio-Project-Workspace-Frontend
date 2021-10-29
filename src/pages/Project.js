import { useState, useEffect } from "react";


const Project = (props) => {

    const id = props.match.params.id;
    const projects = props.projects;
    const project = projects.find(p => p._id === id);
    console.log(props)

    const loading = () => {
        return <h1>loading...</h1>
    };

    const loaded = () => {
        return (
            <>
            <h2>{project.title}</h2>
            {props.songs.map((song, idx) => (
                <h1>{song.song.title}</h1>
            ))}
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