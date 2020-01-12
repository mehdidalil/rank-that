const ArtistListReducer = () => {
    return ([
        {
            id: 0,
            name: "Kendrick Lamar",
            pic: `${process.env.PUBLIC_URL}/resources/artists/kendrick.jpg`,
            grade: 9,
            bio: "Kendrick Lamar Duckworth is an American rapper, songwriter, and record producer. He is regarded by many critics and contemporaries as one of the most important and influential rappers of his generation, and as one of the greatest rappers of all time."
        },
        {
            id: 1,
            name: "Drake",
            pic: `${process.env.PUBLIC_URL}/resources/artists/drake.jpg`,
            grade: 8,
            bio: "Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper, singer, songwriter, producer, actor, and businessman."
        },
        {
            id: 2,
            name: "Pharrell Williams",
            pic: `${process.env.PUBLIC_URL}/resources/artists/pharrell.jpg`,
            grade: 10,
            bio: "Pharrell Lanscilo Williams is an American singer, rapper, songwriter, record producer, fashion designer, and entrepreneur. Williams and Chad Hugo formed the record production duo The Neptunes in 1994, producing hip hop and R&B music."
        },
    ])
};

export default ArtistListReducer;