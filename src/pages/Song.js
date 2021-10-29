
const Song = (props) => {
    const id = props.match.params.id;
    const songs = props.songs;
    const song = songs.find(s => s._id === id);

    return (
        <main>
            <h1>Song</h1>
            <h2>{song.song.title}</h2>
            <h2>{song.song.audio}</h2>
            <h2>{song.song.list[0].item}</h2>
            <h3>{song.song.list[0].sublist[0]}</h3>
            <h3>{song.song.list[0].sublist[1]}</h3>
        </main>
    );
};

export default Song;