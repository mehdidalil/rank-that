const SongListReducer = () => {
    return ([
        {
            title: "Alright",
            album: "To Pimp A Butterfly",
            artist: "Kendrick Lamar",
            youtubeId: "Z-48u_uWMHY",
            pic: `${process.env.PUBLIC_URL}/resources/kendrick.jpg`,
            grade: 9
        },
        {
            title: "God's Plan",
            album: "Scorpion",
            artist: "Drake",
            youtubeId: "xpVfcZ0ZcFM",
            pic: `${process.env.PUBLIC_URL}/resources/drake.jpg`,
            grade: 8
        },
        {
            title: "Angel",
            album: "Out of My Mind",
            artist: "Pharrell Williams",
            youtubeId: "VoICSpU546E",
            pic: `${process.env.PUBLIC_URL}/resources/pharrell.jpg`,
            grade: 6
        },
        {
            title: "That Girl",
            album: "Out of My Mind",
            artist: "Pharrell Williams",
            youtubeId: "ANSBN4KpOOk",
            pic: `${process.env.PUBLIC_URL}/resources/pharrell.jpg`,
            grade: 10
        },
    ])
};

export default SongListReducer;