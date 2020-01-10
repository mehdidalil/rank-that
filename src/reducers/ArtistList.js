const ArtistListReducer = () => {
    return ([
        {
            name: "Kendrick Lamar",
            pic: `${process.env.PUBLIC_URL}/resources/kendrick.jpg`,
            grade: 9
        },
        {
            name: "Drake",
            pic: `${process.env.PUBLIC_URL}/resources/drake.jpg`,
            grade: 8
        },
        {
            name: "Pharrell Williams",
            pic: `${process.env.PUBLIC_URL}/resources/pharrell.jpg`,
            grade: 10
        },
    ])
};

export default ArtistListReducer;