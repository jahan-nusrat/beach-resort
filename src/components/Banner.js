import React from 'react';

function Banner ({ children, title, subtitle }) {
	return (
		<div className="banner">
			<h1>{title}</h1>
			<div />
			<p>{subtitle}</p>
			{children}
		</div>
	);
}

Banner.defaultProps = {
	title    : 'Luxurious rooms',
	subtitle : 'deluxe rooms starting at $299.99'
};

export default Banner;
