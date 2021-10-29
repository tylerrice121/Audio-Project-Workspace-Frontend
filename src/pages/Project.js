import { useState } from "react";
// import { Link } from "react-router-dom";


const Project = (props) => {

    const id = props.match.params.id;
    const projects = props.projects;
    const project = projects.find(p => p._id === id);

    const [formState, setFormState] = useState({
        title: "",
        audio: "",
    });

    const handleChange = (event) => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.createSong(formState, id);
        // console.log(id)
        setFormState({
            title: "",
            audio: ""
        })
    }


    const loading = () => {
        return <h1>loading...</h1>
    };

    const loaded = () => {
        return (
            <>
            <h2>{project.title}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" onChange={handleChange} value={formState.title}/>
                <input type="text" name="audio" onChange={handleChange} value={formState.audio}/>
                <input type="submit" value="add song" />
            </form>
            {/* {props.songs.map((song, idx) => (
                <Link to={`/song/${song._id}`} key={idx}>
                    <h1>{song.song.title}</h1>
                </Link>
            ))} */}
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