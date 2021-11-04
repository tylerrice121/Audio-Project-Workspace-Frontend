import { useState } from "react";
import Header from "../components/Header";

const Song = (props) => {
    const id = props.match.params.id;
    const songId = props.match.params.songid
    const projects = props.projects
    const project = projects.find(p => p._id === id);
    const song = project.songs[songId]

    const [formState, setFormState] = useState({
        item: "",
    });

    const [items, setItems] = useState(song.list)

    const handleAddList = (newList) => {
        const newListItem = [...items, newList]
        setItems(newListItem)
        console.log(newListItem)
        song.list = newListItem
        props.updateEntireProject(project, props.match.params.id)
    }

    const handleChange = (event) => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const uniqueId = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
        const newList = {item: formState.item, _id: uniqueId, completed: false}
        handleAddList(newList)
        setFormState({
            item: "",
        });
    };

    const handleRemoveList = (id) => {
        const newItemList = items.filter(item => item._id !== id)
        setItems(newItemList)
        song.list = newItemList
        props.updateEntireProject(project, props.match.params.id)
    }

    const handleCheck = (id) => {
        const newItemList = items.map(item => {
            if (item._id === id)
            return {...item,completed:!item.completed}
            return item;
        })
        setItems(newItemList)
        song.list = newItemList
        props.updateEntireProject(project, props.match.params.id)
    }

    return (
        <main>
        <Header user={props.user}/>    
            <h1>Song</h1>
            <h2>{song.title}</h2>
            {
                items.length ? 
                    <ul key={song.title}>
                        {items.map(item => ( 
                            <div key={item._id}>
                                <input
                                    type="checkbox" 
                                    name="completed" 
                                    checked={item.completed}
                                    onChange={() => handleCheck(item._id)}
                                />
                                <div>
                                    <p>{item.item}</p>
                                    <p 
                                    style={{fontWeight: 600, cursor: "pointer"}}
                                    onClick={() => handleRemoveList(item._id)}
                                    >
                                    X
                                    </p>
                                </div>              
                            </div>      
                        )) }
                    </ul>          
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