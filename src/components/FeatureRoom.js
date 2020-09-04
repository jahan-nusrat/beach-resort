import React from 'react';
import { RoomConsumer } from '../context';

function FeatureRoom () {
	return (
		<div>
			<RoomConsumer>
				{(user) => {
					return <div>user context value- {user}</div>;
				}}
			</RoomConsumer>
		</div>
	);
}

export default FeatureRoom;
