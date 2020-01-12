import React from 'react';

const SongMedia = (props) => {
	return (
			<iframe
				title="video"
				width="100%"
				height="250px"
				src={`https://www.youtube.com/embed/${props.youtubeId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				>
			</iframe>
	);
}

export default SongMedia;