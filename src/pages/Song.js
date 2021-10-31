
const Song = (props) => {
    // const id = props.match.params.songid;
    const id = props.match.params.id;
    const songId = props.match.params.songid
    const projects = props.projects
    const project = projects.find(p => p._id === id);
    const song = project.songs.find(s => s._id === songId)
    console.log(song)
    // const songs = props.songs;
    // const song = songs.find(s => s._id === id);
    // console.log(songs)
    return (
        <main>
            <h1>Song</h1>
            <h2>{song.title}</h2>
        </main>
    );
};

export default Song;