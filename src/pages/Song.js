import { useState } from "react";
import Header from "../components/Header";
import { StyledSong } from "../styles";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';


const Song = (props) => {
    const id = props.match.params.id;
    const songId = props.match.params.songid
    const projects = props.projects
    const project = projects.find(p => p._id === id);
    const song = project.songs[songId]

    const [formState, setFormState] = useState({
        item: "",
        uniqueId: ""
    });

    const [items, setItems] = useState(song.list)

    const handleAddList = (newList) => {
        const newListItem = [...items, newList]
        setItems(newListItem)
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
        const newList = {item: formState.item, uniqueId: uniqueId, completed: false}
        handleAddList(newList)
        setFormState({
            item: "",
            uniqueId: ""
        });
    };

    const handleRemoveList = (id) => {
        const newItemList = items.filter(item => item.uniqueId !== id)
        setItems(newItemList)
        song.list = newItemList
        props.updateEntireProject(project, props.match.params.id)
    }

    const handleCheck = (id) => {
        const newItemList = items.map(item => {
            if (item.uniqueId === id)
            return {...item,completed:!item.completed}
            return item;
        })
        setItems(newItemList)
        song.list = newItemList
        props.updateEntireProject(project, props.match.params.id)
    }

    return (
        <StyledSong>
        <Header user={props.user}/>    
            <div className="top">
                <h2>{song.title}</h2>
                <form onSubmit={handleSubmit} className="newitem">
                    <TextField 
                            id="standard-basic" 
                            label="New Todo" 
                            variant="standard"
                            onChange={handleChange} 
                            value={formState.item}
                            name="item"
                            type="text" 
                    />
                    <Button variant="outlined" type="submit">ADD</Button>
                </form>      
            </div>
            {
            items.length ? 
            <ul key={song.title} className="list">
                {items.map((item) =>  
                <ListItem key={item.uniqueId} className="listItem">
                    <div className="checkText">
                        <Checkbox
                            type="checkbox" 
                            name="completed" 
                            checked={item.completed}
                            onChange={() => handleCheck(item.uniqueId)}
                        />
                        <p>{item.item}</p>
                    </div>
                    <p  
                        className="x"
                        style={{fontWeight: 600, cursor: "pointer"}}
                        onClick={() => handleRemoveList(item.uniqueId)}
                    >X
                    </p>           
                </ListItem>         
                )}
            </ul>          
            :
            <h2 className="nolist">No List Items Yet</h2>
            }
        </StyledSong>
    );
};

export default Song;