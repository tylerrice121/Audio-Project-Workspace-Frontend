import { useState } from "react";

const Song = (props) => {
    // const id = props.match.params.songid;
    const id = props.match.params.id;
    const songId = props.match.params.songid
    const projects = props.projects
    const project = projects.find(p => p._id === id);
    const song = project.songs[songId]

    const [formState, setFormState] = useState({
        item: "",
        completed: false
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
            item: "",
        });
    };

    const handleCheckChange = (id) => {
        const newList = song.list.map(item => {if(item._id === id)
            return {...item,completed: !item.completed}
        return item;  
    })
    setFormState(newList)
    props.updateProject(formState, id, songId)
    console.log(formState)
}
    
    return (
        <main>
            <h1>Song</h1>
            <h2>{song.title}</h2>
            {
                song.list.length ? 
                <>
                    <ul>
                        {song.list.map((l, _id) => (       
                            <li key={l._id}>{l.item} 
                                <input 
                                    type="checkbox" 
                                    name="completed" 
                                    onChange={() => handleCheckChange(l._id)} 
                                    checked={formState.completed}
                                />
                            </li>              
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
        </main>
    );
};

export default Song;