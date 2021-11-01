import { useState } from "react";

const Song = (props) => {
    // const id = props.match.params.songid;
    const id = props.match.params.id;
    const songId = props.match.params.songid
    // console.log(songId)
    const projects = props.projects
    const project = projects.find(p => p._id === id);
    const song = project.songs[songId]

    const [formState, setFormState] = useState({
        item: ""
    });

    const handleChange = (event) => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        song.list.push(formState)
        props.updateProject(formState, id, songId)
        setFormState({
            item: ""
        });
    };
    console.log(project)

    return (
        <main>
            <h1>Song</h1>
            <h2>{song.title}</h2>
            {
                song.list.length ? 
                <>
                <ul>
                    {song.list.map((l, id) => (
                        
                        <li key={id}>{l.item}</li>
                    )) }
                </ul>
                </>
                :
                <p>No List Yet</p>
            }
            <form onSubmit={handleSubmit}>
                <input type="text" name="item" onChange={handleChange} value={formState.item}/>
                <input type="submit" value="Add Item to List"/>
            </form>
            <ul>

            </ul>
        </main>
    );
};

export default Song;