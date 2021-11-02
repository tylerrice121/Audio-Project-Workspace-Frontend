import { useState } from "react";

const Song = (props) => {
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
            [event.target.name]: event.target.name === 'completed' ? event.target.checked : event.target.value
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        song.list.push(formState)
        props.updateProject(formState, id, songId)
        setFormState({
            item: "",
            // completed: false
        });
    };

    // const handleCheck = _id => {
    //     const updatedItem = song.list.map((item, _id) => {
    //         if (item._id === _id){
    //             item.completed = !item.completed;
    //         }
    //         return item;
    //     })
    //     console.log(updatedItem)
    //     }

    //     // console.log(song.list[0])
    //     // setFormState(prevState => {
    //     //     if(song.list._id === id){
    //     //         console.log('yay')
    //     //     }
    //     //     console.log(prevState)
    //     // })
    // }
    
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
                                    checked={formState.completed}
                                    onChange={handleChange}
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