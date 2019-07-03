import React from 'react';
import './styles/header.css';

const PlaylistHeader = ({ active, total }) => {
	return (
		<div className="Header">
			<p>{active.title}</p>
			<div className="Header__Journey">
				{active.num}/{total}
			</div>
		</div>
	);
};

export default PlaylistHeader;
