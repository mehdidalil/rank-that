import React from 'react';

const Logo = (props) => {
	let width = 0;
	if (props.large)
		width=200;
	else if (props.medium)
		width=125;
	else if (props.small)
		width=50;
	return (
		<div style={{marginLeft: "20px", marginRight: "20px"}}>
			<img src={`${process.env.PUBLIC_URL}/resources/img/rankthat.png`} alt="logo" width={`${width}px`} />
		</div>
	)
};

export default Logo;