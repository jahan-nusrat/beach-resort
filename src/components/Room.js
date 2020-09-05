import React from 'react';
import defaultImg from '../images/room-1.jpg';

function Room ({ room }) {
	const { name, slug, image, price } = room;
	return (
		<article className="room">
			<div className="img-container">
				<img src={image[0] | defaultImg} alt="single-room" />
			</div>
		</article>
	);
}

export default Room;
