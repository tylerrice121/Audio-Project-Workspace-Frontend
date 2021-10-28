import { useState } from "react";

const Project = (props) => {
    const id = props.match.params.id;
    const projects = props.projects;
    const project = projects.find(p => p._id === id);
    console.log(props)

    return (
        <main>
            <h1>Project</h1>
            <h2>{project.title}</h2>
        </main>
    );
};

export default Project;