import { useState } from "react";

const Song = (props) => {
    const id = props.match.params.id;
    const songId = props.match.params.songid
    const projects = props.projects
    const project = projects.find(p => p._id === id);
    const song = project.songs[songId]

    const [formState, setFormState] = useState({
        item: "",
    });
    console.log(project)

    const [items, setItems] = useState(song.list)

    const handleAddList = (newList) => {
        const newListItem = [...items, newList]
        setItems(newListItem)
        song.list.push(newList)
        props.updateProject(newList, id, songId)
    }

    const handleChange = (event) => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.name === 'completed' ? event.target.checked : event.target.value
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newList = {item: formState.item, id: id, completed: false}
        handleAddList(newList)
        setFormState({
            item: "",
        });
    };

    const handleRemoveList = (id) => {
        const newItemList = items.filter(item => item._id !== id)
        setItems(newItemList)
        song.list = newItemList
        console.log(project)
        props.updateEntireProject(project, props.match.params.id)
    }

    return (
        <main>
            <h1>Song</h1>
            <h2>{song.title}</h2>
            {
                items.length ? 
                <>
                    <ul>
                        {items.map((l, _id) => ( 
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="completed" 
                                    checked={formState.completed}
                                    onChange={handleChange}
                                />
                            <span key={l._id}>{l.item} 
                                <span 
                                    style={{fontWeight: 600, cursor: "pointer"}}
                                    onClick={() => handleRemoveList(l._id)}
                                    >
                                    X
                                </span>
                                <hr />
                            </span>              
                            </div>      
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