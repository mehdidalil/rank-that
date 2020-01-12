const AlbumListReducer = () => {
    return ([
        {
            id: 0,
            name: "To Pimp A Butterfly",
			pic: `${process.env.PUBLIC_URL}/resources/albums/tpab.jpg`,
			artistId: 0,
        },
		{
            id: 1,
            name: "DAMN.",
			pic: `${process.env.PUBLIC_URL}/resources/albums/damn.jpg`,
			artistId: 0,
		},
		{
            id: 2,
            name: "Good Kid Maad City",
			pic: `${process.env.PUBLIC_URL}/resources/albums/gkmc.jpg`,
			artistId: 0,
		},
		{
            id: 3,
            name: "Frontin'",
			pic: `${process.env.PUBLIC_URL}/resources/albums/frontin.jpg`,
			artistId: 2,
		},
		{
            id: 4,
            name: "Out Of My Mind",
			pic: `${process.env.PUBLIC_URL}/resources/albums/oomm.jpg`,
			artistId: 2,
		},
		{
            id: 5,
            name: "Views",
			pic: `${process.env.PUBLIC_URL}/resources/albums/views.jpg`,
			artistId: 1,
		},
		{
            id: 6,
            name: "Scorpion",
			pic: `${process.env.PUBLIC_URL}/resources/albums/scorpion.jpg`,
			artistId: 1,
        },
    ])
};

export default AlbumListReducer;